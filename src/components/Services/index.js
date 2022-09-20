import React,{useState} from "react";
import Qrcodenutri from '../../assets/inglisqr.png';
import Qrcodeingles from '../../assets/Netoinglis.png';

import './style.css';


function ServicesPage(){

    const [item, setItem] = useState('');
    const [itemb, setItemb] = useState('');

return (
<div className="servicespage" >
<div className='barratopmob'></div>
<div className="cardservices">


   <div className="carditem">

        {!item && 
     <div className="aulasingles"> 
        Nutrição
        <button className="btnaulas" onClick={() => setItem(1)}>Agendar consulta</button>
     </div>
     }
      
      {item &&
     <div className="aulasingles"> 
        Nutrição
        <button className="btnaulas" onClick={() => setItem('')}>Fechar</button>
     </div>
     }

     {item &&
     <div className="seconitem">
         <img src={Qrcodenutri} alt=""/>
     </div>
     }

     
   </div>






   <div className="carditemb">

   {itemb && 
   <div className="aulasingles"> 
        Aulas de Ingles
        <button className="btnaulas" onClick={() => setItemb('')}>Fechar</button>
     </div>
     }
      {!itemb && 
     <div className="aulasingles"> 
        Aulas de Ingles
        <button className="btnaulas" onClick={() => setItemb('1')}>Agendar aula</button>
     </div>
         }
     {itemb &&
     <div className="seconitemb">
         <img src={Qrcodeingles} alt=""/>
     </div>
     }

   </div>



</div>  
</div>
);
}

export default ServicesPage;