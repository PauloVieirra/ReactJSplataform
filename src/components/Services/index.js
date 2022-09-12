import React,{useState} from "react";
import './style.css';


function ServicesPage(){

    const [item, setItem] = useState('');

return (
<div className="servicespage" >
<div className='barratopmob'></div>
<div className="cardservices">
   <div className="carditem">
     <div className="aulasingles"> 
        Aulas de Ingles
        <div className="btnaulas" onClick={() => setItem(1)}>Agendar aula</div>
     </div>
     {item &&
     <div className="seconitem">
      
     </div>
    }
   </div>
   <div className="carditemb">
     <div className="aulasingles"> 
     Nutrição
        <div className="btnaulas">Agendar consulta</div>
     </div>
   </div>
</div>  
</div>
);
}

export default ServicesPage;