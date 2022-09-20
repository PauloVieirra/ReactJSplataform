import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Foot = () =>(
  <div className="barrafootboot">
     <div className="divfoottextmobi">
    <Link to={'Termo'} className="btnmenu"> Termo de uso e privacidade</Link>
          </div>
     <div className="divinterfoot">
    
          <div className="divfoottext">
          <Link to={'Termo'} className="btnmenu"> Política de uso </Link>
          </div>
          <div className="divfoottext">
           suporte@plus1cademy.com
          </div>
          <div className="divfoottext">
          Telefone: 61-9123-3656
          </div>
          <div className="divfoottext">
          © 2022 Plus1Cademy, Inc.
          </div>

     </div>
  </div>
);

export default Foot;