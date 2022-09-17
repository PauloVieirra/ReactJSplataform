import React,{useState} from 'react';
import'./style.css';

export default function Landing() {

    const [load, setLoad] = useState('load');

    window.setTimeout(function() {
        window.location.href = './Signin';
    }, 5000);

    const path = document.getElementById('c')

 return (
   <div className='cardsplash'>
   <div className='splashlogo'>
   <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
		<circle id="c" fill="none" stroke-width="4" stroke-linecap="round" stroke="white" cx="45" cy="45" r="43" />
	</svg>
   </div>
   </div>
  );
}