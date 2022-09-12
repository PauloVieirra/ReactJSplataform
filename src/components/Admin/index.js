import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';
import './styles.css';
import { withAuthorization, withEmailVerification } from '../Session';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { UserList, UserItem } from '../Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const AdminPage = () => (
  
  <div className='adminpageinto'>
    <div className='barratopadmin'></div>
    <div className='admininto'>

   <button className='btnadmininto'><PasswordForgetLink /> </button>
    
     <button className='btnadmininto'> <SignUpLink /></button>

     <button className='btnadmininto'> Cadastrar evento</button>

    </div>
   
  
   
 
    <Switch>
     
      <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.ADMIN} component={UserList} />
    </Switch>
  </div>
);

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(AdminPage);
