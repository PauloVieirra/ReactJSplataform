import React, { Component, useState } from 'react';
import { compose } from 'recompose';
import iconcalendar from '../../assets/calendar.svg';
import iconestatura from '../../assets/metrr.svg';
import iconposition from '../../assets/position.svg';
import iconlanguange from '../../assets/language.svg';
import iconstudy from '../../assets/book.svg';
import iconmenu from  '../../assets/menu.svg';
import Menuside from '../Menu';

import './style.css'

import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../Session';
import { withFirebase } from '../Firebase';





const SIGN_IN_METHODS = [
  {
    id: 'password',
    provider: null,
  },
  {
    id: 'google.com',
    provider: 'googleProvider',
  },
  {
    id: 'facebook.com',
    provider: 'facebookProvider',
  },
  {
    id: 'twitter.com',
    provider: 'twitterProvider',
  },
];

function Controler(){
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
      setMode(!active)
  }
};



const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className='acountpage'>
     
        <div className='barratop'>
               
        </div>
        <div className='barratopmob'>
        
        </div>
         <div className='card'>
            <div className='cardl'>
              <div className='cardlsup'>
              <img className='boximg' src={authUser.img} alt=""></img>
              </div>
              <div className='cardlsub'>
              <div className='texttitlle'> {authUser.username}</div>
              <div className='textemail'> {authUser.email}</div> 
              <div className='contdado'>
                <div className='iconcont'>
                   <div className='iconcontdado'>
                   <img src={iconcalendar} alt=""/>
                </div>
                </div>
               
                <div className='dadocontdado'>
                <div className='text'> <strong> Nascimento:</strong> {authUser.ano}</div> 
                </div>
              </div>
              <div className='contdado'>
                <div className='iconcontb'>
                   <div className='iconcontdado'>
                   <img src={iconestatura} alt=""/>
                </div>
                </div>
                <div className='dadocontdado'>
                <div className='text'> <strong>Estatura:</strong> {authUser.estatura}</div> 
                </div>
              </div>
              <div className='contdado'>
                <div className='iconcontc'>
                   <div className='iconcontdado'>
                   <img src={iconposition} alt=""/>
                </div>
                </div>
                <div className='dadocontdado'>
                <div className='text'> <strong>Posição:</strong> {authUser.posicao}</div> 
                </div>
              </div>
              <div className='contdadomob'>
                <div className='iconcontd'>
                   <div className='iconcontdado'>
                   <img src={iconstudy} alt=""/>
                </div>
                </div>
                <div className='dadocontdado'>
                <div className='text'> <strong>Estudos:</strong> {authUser.estudos}</div> 
                </div>
              </div>
              <div className='contdadomob'>
                <div className='iconconte'>
                   <div className='iconcontdado'>
                   <img src={iconlanguange} alt=""/>
                </div>
                </div>
                <div className='dadocontdado'>
                <div className='text'> <strong>Ingles:</strong> {authUser.idioma}</div> 
                </div>
              </div>
              </div>
            </div>
            <div className='cardr'>
            <div className='cardrsup'>
              <div className='cardintosup'>
                     <div className='textingl'>
                              O idioma idioma é muito importante para que você tenha uma boa experiencia no exterior.
                              atualmente seu nivel de inglês é:
                     </div>
                     <div className='intinfo'>
                     <div className='divlvwidioma'>
                     <strong>{authUser.idioma}</strong>
                     </div>
                     <div className='infolvwcut'>
                         <h5>Para marcar aulas e obter mais informações clique no botão abaixo.
                     </h5> </div>
                     </div>
              </div>
              <div className='cardintosub'>
                      <h2>Idioma</h2>
              </div>
            </div>
              <div className='cardrsup'>
              <div className='cardintosup'>
              <div className='textingl'>
                             Lembrete - o bom desempenho escolar e obrigatório para a continuidade no programa.
                     </div>
                     <div className='intinfo'>
                       <div className='divlvwidioma'>
                     <strong>{authUser.estudos}</strong> 
                     </div>
                     <div className='infolvwcut'>
                     <h5>Para saber mais sobre desempenho escolar clique no botão abaixo
                     </h5>
                     </div>
                     </div>
                  </div>
                  <div className='cardintosub'>
                      <h2>Estudos</h2>
                  </div>
              </div>
            </div>
         </div>
         <div className='barrafoot'>

         </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

class LoginManagementBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSignInMethods: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchSignInMethods();
  }

  fetchSignInMethods = () => {
    this.props.firebase.auth
      .fetchSignInMethodsForEmail(this.props.authUser.email)
      .then(activeSignInMethods =>
        this.setState({ activeSignInMethods, error: null }),
      )
      .catch(error => this.setState({ error }));
  };

  onSocialLoginLink = provider => {
    this.props.firebase.auth.currentUser
      .linkWithPopup(this.props.firebase[provider])
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  onDefaultLoginLink = password => {
    const credential = this.props.firebase.emailAuthProvider.credential(
      this.props.authUser.email,
      password,
    );

    this.props.firebase.auth.currentUser
      .linkAndRetrieveDataWithCredential(credential)
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  onUnlink = providerId => {
    this.props.firebase.auth.currentUser
      .unlink(providerId)
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  render() {
    const { activeSignInMethods, error } = this.state;

    return (
      <div>
        Sign In Methods:
        <ul>
          {SIGN_IN_METHODS.map(signInMethod => {
            const onlyOneLeft = activeSignInMethods.length === 1;
            const isEnabled = activeSignInMethods.includes(
              signInMethod.id,
            );

            return (
              <li key={signInMethod.id}>
                {signInMethod.id === 'password' ? (
                  <DefaultLoginToggle
                    onlyOneLeft={onlyOneLeft}
                    isEnabled={isEnabled}
                    signInMethod={signInMethod}
                    onLink={this.onDefaultLoginLink}
                    onUnlink={this.onUnlink}
                  />
                ) : (
                  <SocialLoginToggle
                    onlyOneLeft={onlyOneLeft}
                    isEnabled={isEnabled}
                    signInMethod={signInMethod}
                    onLink={this.onSocialLoginLink}
                    onUnlink={this.onUnlink}
                  />
                )}
              </li>
            );
          })}
        </ul>
        {error && error.message}
      </div>
    );
  }
} 

const SocialLoginToggle = ({
  onlyOneLeft,
  isEnabled,
  signInMethod,
  onLink,
  onUnlink,
}) =>
  isEnabled ? (
    <button
      type="button"
      onClick={() => onUnlink(signInMethod.id)}
      disabled={onlyOneLeft}
    >
      Deactivate {signInMethod.id}
    </button>
  ) : (
    <button
      type="button"
      onClick={() => onLink(signInMethod.provider)}
    >
      Link {signInMethod.id}
    </button>
  );

class DefaultLoginToggle extends Component {
  constructor(props) {
    super(props);

    this.state = { passwordOne: '', passwordTwo: '' };
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.onLink(this.state.passwordOne);
    this.setState({ passwordOne: '', passwordTwo: '' });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      onlyOneLeft,
      isEnabled,
      signInMethod,
      onUnlink,
    } = this.props;

    const { passwordOne, passwordTwo } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return isEnabled ? (
      <button
        type="button"
        onClick={() => onUnlink(signInMethod.id)}
        disabled={onlyOneLeft}
      >
        Deactivate {signInMethod.id}
      </button>
    ) : (
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />

        <button disabled={isInvalid} type="submit">
          Link {signInMethod.id}
        </button>
      </form>
    );
  }
}

const LoginManagement = withFirebase(LoginManagementBase);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(AccountPage);
