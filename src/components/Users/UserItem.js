import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import './style.css'

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: null,
      ...props.location.state,
    };
  }

  componentDidMount() {
    if (this.state.user) {
      return;
    }

    this.setState({ loading: true });

    this.props.firebase
      .user(this.props.match.params.id)
      .on('value', snapshot => {
        this.setState({
          user: snapshot.val(),
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.state.user.email);
  };

  render() {
    const { user, loading } = this.state;

    return (
      <div className='playeritem'>
        <h2>User ({this.props.match.params.id})</h2>
        {loading && <div>Loading ...</div>}
                
        {user && (
          <div > 
       
          <div>
              <strong>ID:</strong> {user.uid}
            </div>
            <div>
              <strong>E-Mail:</strong> {user.email}
            </div>
            <div>
              <strong>Username:</strong> {user.username}
            </div>
            <div>
            <div>
                <strong>Mothername:</strong> {user.nomemae}
            </div>
            <div>
                <strong>img:</strong> {user.img}
            </div>
              

              <button
                type="button"
                onClick={this.onSendPasswordResetEmail}
              >
                Send Password Reset
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(UserItem);
