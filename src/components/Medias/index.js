import React, { Component, useState } from 'react';
import { compose } from 'recompose';
import './style.css'

import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../Session';
import { withFirebase } from '../Firebase';

function VideoPages () {

    const [media, setMedia] =useState('http://www.w3schools.com/html/mov_bbb.mp4');
     console.log(media);

   
   
    return(
    <AuthUserContext.Consumer>     
    {authUser => (
    <div className="divgeral">
        <div className="cardmediatop">

        </div>
        <div className="cardmediabanner">
            
        </div>
        <div className="cardmediavideo">
        <video className="video" autoPlay controls="true" preload="metadata">
                <source src={media} type="video/mp4"/> 
               </video>
          
        </div>
              <div className="cardmedia">
                <div className="miniaturas">
                <div className="videoicon">
                   <button onClick={() => setMedia(authUser.urlone)}>123</button>
                </div>
               <div className="videoicon"  >
                <source src="http://www.w3schools.com/html/mov_bbb.mp4"type=""/>
               </div>
               <video className="videoicon"  >
                <source src="http://www.w3schools.com/html/mov_bbb.mp4"type=""/>
               </video>
               <video className="videoicon"  >
                <source src="http://www.w3schools.com/html/mov_bbb.mp4"type=""/>
               </video>
                </div>
               
           
          
              </div>
    </div>
     )}
     </AuthUserContext.Consumer>
     );
};


export default VideoPages;