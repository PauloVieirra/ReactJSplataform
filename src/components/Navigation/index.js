import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import './style.css';
import logo from '../../assets/logoplus.png';
import Foot from '../Footer';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

function contruction()
{
alert("Disponivel em breve!");
}

const NavigationAuth = ({ authUser }) => (
 
  <div className="area">
  <nav className="main-menu">
    <div className='menuinterno'>
      <div className='menuamburguer'>
                      <i className="fa fa-bars fa-2x"></i>
                      <span className="nav-text">
                      </span>
      </div>
          <ul>
          
              <li className="has-subnav">
              <Link to={ROUTES.ACCOUNT}>
                      <i className="fa fa-user fa-2x"></i>
                      <span className="nav-text">
                          Meu perfil
                      </span>
                 </Link>
              </li>
              <li  className="has-subnav">
              
                   <i className="fa fa-play fa-2x"></i>
                      <span className="nav-text">
                         Meus vídeos
                      </span>
             
              </li>
              <li  className="has-subnav">
                <Link to={ROUTES.SERVICE}>
                   <i className="fa fa-book fa-2x"></i>
                      <span className="nav-text">
                         Serviços
                      </span>
                  </Link>
              </li>
            
              {!!authUser.roles[ROLES.ADMIN] && (
              <li className="has-subnav">
              <Link to={ROUTES.ADMIN}>
                     <i className="fa fa-list fa-2x"></i>
                      <span className="nav-text">
                          Admin
                      </span>
                  </Link>
              </li>
                )}
             
             
          </ul>
          </div>

          <ul className="logout">
              <li>
               
                       
                      <span className="nav-text">
                      <SignOutButton />
                      </span>
               
              </li>  
          </ul>
        </nav>
      </div>

);

const NavigationNonAuth = () => (
    
  <div className='extern'>
    <div className='extera'>
       <img src={logo} alt=""/>
    </div>
    <div className='exterab'></div>
    <div className='exterac'>
    <button className='btnmenu'>
        <Link to={ROUTES.SIGN_IN}>Entrar</Link>
    </button>
    </div>
   
  </div>
);

export default Navigation;
