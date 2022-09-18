import React from 'react';
import'./styles.css';

export default function SobrePage() {
  function handleabolt(){
    window.location.replace('../Sobre')
  };
  
  function handlevisa(){
    window.location.replace('../Visto');
  }

  function handlefacul(){
    window.location.replace('../Faculdade');
  }

  function handlefranquia(){
    window.location.replace('../Franquia');
  }

  function handleeducation(){
    window.location.replace('../Educacao');
  }

 return (
  <div className='divloggeral'>
  <div className='cardsinone'>
     <div className='topinit'>
     <div className='topinit'>
       <div className='apart'>
         <div className='btn btnmenu ' onClick={handleabolt}>Sobre</div>
         <div className='btn btnmenu ' onClick={handlevisa}>Visto/Passaporte</div>
         <div className='btn btnmenu ' onClick={handleeducation}>Educação</div>
         <div className='btn btnmenu ' onClick={handlefacul}>Faculdades</div>
         <div className='btn btnmenu ' onClick={handlefranquia}>Franquia</div>
       </div>
       <div className='bpart'></div>
     </div>
  </div>     
    {/*
    <PasswordForgetLink />
    <SignUpLink />*/}
   
  </div>

  </div>
  );
}