import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
    
  }
  

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div >
        <h2>Users</h2>
        <div className='playerinterg'>
        {loading && <div>Loading ...</div>}
   
          {users.map(user => (
            <div key={user.uid}>
             <div className='playeritem'>
               <div className='playerinto'>
             
              <div className='playdimg'>
                <img className='playdimage' src={user.img} alt=""/> 
              </div>
              <div className='intoplaydatalist'>
              <br/>
              <div className='linhaplay'>
                <strong>{user.username}</strong> 
              </div>
              <div className='linhaplay'>
               {user.email}
              </div>
              <div className='linhaplay'>
              {user.telefone}
            </div>
            
            <div>
                <Link
                  to={{
                    pathname: `${ROUTES.ADMIN}/${user.uid}`,
                    state: { user },
                  }}
                >
                  Details
                </Link>
              </div>

              </div>
            
            </div></div></div>
          ))}
       </div>
      </div>
    );
  }
}

export default withFirebase(UserList);
