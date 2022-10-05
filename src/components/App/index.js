import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import VideoPages from '../Medias';
import ServicesPage from '../Services';
import SeletivaPage from '../Seletiva';
import EducacaoPage from '../Cards/Educacao';
import Termo from '../Termo';
import FaculdadePage from '../Cards/Faculdades';
import FranquiaPage from '../Cards/Franquia';
import VistoPage from '../Cards/Visto';
import SobrePage from '../Cards/Sobre';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />
       

      <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
     
      <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
      <Route path={ROUTES.SELETIVA} component={SeletivaPage}/>
      <Route path={ROUTES.EDUCACAO} component={EducacaoPage}/>
      <Route path={ROUTES.FACULDADE} component={FaculdadePage}/>
      <Route path={ROUTES.FRANQUIA} component={FranquiaPage}/>
      <Route path={ROUTES.SOBRE} component={SobrePage}/>
      <Route path={ROUTES.VISTO} component={VistoPage}/>
      <Route path={ROUTES.TERMO} component={Termo}/>

      
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
       <Route  path={ROUTES.LANDING} component={Landing}/>
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.MEDIA} component={VideoPages} />
      <Route path={ROUTES.SERVICE} component={ServicesPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
