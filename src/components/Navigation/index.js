import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import './style.css';

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

const NavigationAuth = ({ authUser }) => (
    <div className='manusup'>
      <button>
      <Link to={ROUTES.LANDING}>Landing</Link>
      </button>
      <button>
        <Link to={ROUTES.HOME}>Home</Link>
      </button>
      <button>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </button>

    {!!authUser.roles[ROLES.ADMIN] && (
      <button>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </button>
    )}
  
      <SignOutButton />
 
   </div>
);

const NavigationNonAuth = () => (
    
  <div>
    <button>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </button>
    <button>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </button>
  </div>
);

export default Navigation;
