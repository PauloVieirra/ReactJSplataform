import React from 'react';
import './style.css';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <div className='contbuut'>
    <button type="button" className='buttonout' onClick={firebase.doSignOut}>
     <div className='textebtn'>Sair</div>
    </button>
  </div>
 
);

export default withFirebase(SignOutButton);
