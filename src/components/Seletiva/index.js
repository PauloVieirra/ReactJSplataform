import React, { Component,useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import Modal from 'react-bootstrap/Modal';
import logo from '../../assets/logoplus.png'
import * as ROUTES from '../../constants/routes';
import './styles.css';
import backarrow from '../../assets/arrow-left.svg';
import Iconfranquia from '../../assets/left-arrow.png';

export default function SeletivaPage() {
 return (
  <div className='divseletiva'>
    <div className='divselctop'>
      <Link to={'/'}><img className='divicon' src={Iconfranquia} alt=""/> </Link>
    </div>

 <div className='toplogoselect'>
        <img src={logo} className="imglogoselect" alt=""/>
 </div>
 <div className='toplogoselect'>
      Você esta se inscrevendo para a seletiva.
 </div>



    <div className='formselect'>

    <form>
  
        
  
  <div className='inputintern'>
     <div class=" input-group  mb-3">
     <div className='divlogcorp'>
    <div className='divtextloginput'>NOME </div>
 <input type="text" 
 name="email"


 class="form-control"  
 placeholder="" 
 aria-label="Username" 
 aria-describedby="basic-addon1"
 />
    </div>
   </div>
  </div>

  <div className='inputintern'>
     <div class=" input-group row  mb-3">
     <div className='divlogcorp'>
    <div className='divtextloginput'> SOBRENOME </div>
 <input type="text" 
 name="password"
 

 class="form-control"  
 placeholder="" 
 aria-label="Username" 
 aria-describedby="basic-addon1"
 />
    </div>
   </div>
  </div>

  <div className='inputintern'>
     <div class=" input-group row  mb-3">
     <div className='divlogcorp'>
    <div className='divtextloginput'> EMAIL </div>
 <input type="text" 
 name="password"
 class="form-control"  
 placeholder="" 
 aria-label="Username" 
 aria-describedby="basic-addon1"
 />
    </div>
   </div>
  </div>
  <div className='inputintern'>
     <div class=" input-group row  mb-3">
     <div className='divlogcorp'>
    <div className='divtextloginput'> TELEFONE </div>
 <input type="text" 
 name="password"
 

 class="form-control"  
 placeholder="" 
 aria-label="Username" 
 aria-describedby="basic-addon1"
 />
    </div>
   </div>
  </div>

  <div className='inputintern'>
     <div class=" input-group row  mb-3">
     <div className='divlogcorp'>
    <div className='divtextloginput'> NASCIMENTO </div>
 <input type="text" 
 name="password"
 

 class="form-control"  
 placeholder="" 
 aria-label="Username" 
 aria-describedby="basic-addon1"
 />
    </div>
   </div>
  </div>

  <div className='inputintern'>
     <div class=" input-group row  mb-3">
     <div className='divlogcorp'>
    <div className='divtextloginput'> ESTATURA </div>
 <input type="text" 
 name="password"
 

 class="form-control"  
 placeholder="" 
 aria-label="Username" 
 aria-describedby="basic-addon1"
 />
    </div>
   </div>
  </div>

  <div className='inputintern'>
     <div class=" input-group row  mb-3">
     <div className='divlogcorp'>
    <div className='divtextloginput'> PESO </div>
 <input type="text" 
 name="password"
 

 class="form-control"  
 placeholder="" 
 aria-label="Username" 
 aria-describedby="basic-addon1"
 />
    </div>
   </div>
  </div>

  <div className='inputintern'>
     <div class=" input-group row  mb-3">
     <div className='divlogcorp'>
    <div className='divtextloginput'> POSIÇÃO QUE JOGA </div>
 <input type="text" 
 name="password"
 

 class="form-control"  
 placeholder="" 
 aria-label="Username" 
 aria-describedby="basic-addon1"
 />
    </div>
   </div>
  </div>

  <div className='inputintern'>
     <div class=" input-group row  mb-3">
     <div className='divlogcorp'>
    <div className='divtextloginput'> OBJETIVO </div>
 <input type="text" 
 name="password"
 

 class="form-control"  
 placeholder="" 
 aria-label="Username" 
 aria-describedby="basic-addon1"
 />
    </div>
   </div>
  </div>

  <div className='divlogcorp'>
     <button className='btn btnsigin'  type="submit">
         ENVIAR
     </button>

    
  </div>


      

     </form>
    </div>
    
    </div>
  );
}