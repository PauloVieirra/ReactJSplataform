import React from 'react';
import '../style.css'

export default function Franquia() {
 return (
 
     <div className='divloggeral'>
  <div className='cardsinone'>
     <div className='topinit'>
       <div className='apart'>
         <div className='btn btnmenu '>Sobre</div>
         <div className='btn btnmenu '>Visto/Passaporte</div>
         <div className='btn btnmenu '>Educação</div>
         <div className='btn btnmenu '>Faculdades</div>
         <div className='btn btnmenu '>Franquia</div>
       </div>
       <div className='bpart'></div>
     </div>
     <div className='divoneinit'>
     
     </div>
  </div>
  <div className='cardsign'>
    <div className='divlogsup'>
    <div className='divloglogo'>
       <img className='divlogimg' src={logo} alt=""/>
    </div>
    </div>
    <div className='divlogsub'>
        <SignInForm />
    </div>       
    {/*
    <PasswordForgetLink />
    <SignUpLink />*/}
   
  </div>

  </div>
  
  );
}