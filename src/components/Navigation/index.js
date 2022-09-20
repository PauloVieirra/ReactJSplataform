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
 
  <div class="area">
  <nav class="main-menu">
    <div className='menuinterno'>
      <div className='menuamburguer'>
                      <i class="fa fa-bars fa-2x"></i>
                      <span class="nav-text">
                      </span>
      </div>
          <ul>
          
              <li class="has-subnav">
              <Link to={ROUTES.ACCOUNT}>
                      <i class="fa fa-user fa-2x"></i>
                      <span class="nav-text">
                          Meu perfil
                      </span>
                 </Link>
              </li>
              <li  class="has-subnav">
              
                   <i class="fa fa-play fa-2x"></i>
                      <span class="nav-text">
                         Meus vídeos
                      </span>
             
              </li>
              <li  class="has-subnav">
                <Link to={ROUTES.SERVICE}>
                   <i class="fa fa-book fa-2x"></i>
                      <span class="nav-text">
                         Serviços
                      </span>
                  </Link>
              </li>
            
              {!!authUser.roles[ROLES.ADMIN] && (
              <li class="has-subnav">
              <Link to={ROUTES.ADMIN}>
                     <i class="fa fa-list fa-2x"></i>
                      <span class="nav-text">
                          Admin
                      </span>
                  </Link>
              </li>
                )}
             
             
          </ul>
          </div>

          <ul class="logout">
              <li>
               
                       
                      <span class="nav-text">
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
