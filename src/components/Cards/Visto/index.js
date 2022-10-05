import React from 'react';
import { Link } from 'react-router-dom';
import Iconfranquia from '../../../assets/left-arrow.png';
import './styles.css'

export default function FranquiaPage() {
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
  <div className='divcardexternone'>
     <div className='topinit'>
     <div className='topinit'>
      <div className='divtophomeback'>
      <Link to={'/'}><img className='divicon' src={Iconfranquia} alt=""/> </Link>
      </div>
       <div className='aparttopd'>
         <div className='btn btnmenu ' onClick={handleabolt}>Sobre</div>
         <div className='btn btnmenu ' onClick={handlevisa}>Visto/Passaporte</div>
         <div className='btn btnmenu ' onClick={handlefacul}>Faculdades</div>
         <div className='btn btnmenu ' onClick={handlefranquia}>Franquia</div>
       </div>
     
     </div>
  </div>
       
    <div className='divcardextern'>
      <div className='carfranquia'>

      <div className='cardtexttitle'>
        Visto e Passaporte.
     
        </div>
        <div className='cardtextconteudo'>
           <br/>Em qualquer viagem é necessário ter alguns documentos em mãos na hora do
embarque. Claro que no caso dos Estados Unidos não seria diferente.
Selecionamos os principais documentos de um intercâmbio esportivo que não
podem faltar quando você estiver embarcando rumo aos EUA:
<br/>
 </div>

        <div className='cardtexttitle'>
        Visto de Estudante
        </div>
        <div className='cardtextconteudo'>
        <br/>Toda pessoa que pretende estudar qualquer curso com duração de mais de 18
horas semanais nos Estados Unidos precisa requerer um Visto de Estudante.
É bom que o estudante comece a dar entrada no visto pelo menos 120 dias
antes do início das aulas para ter um bom prazo para conseguir todos os
documentos necessários.
        </div>
        

        <div className='cardtexttitle'>
        O I-20
        </div>
        <div className='cardtextconteudo'>
        <br/> O I-20 faz parte dos documentos de um intercâmbio esportivo que comprovam
o vínculo com a universidade e “dá validade” ao visto de estudante.
A partir do momento que a instituição aceita a matrícula do aluno e emite o seu
I-20 ela é a responsável por manter o status de estudante desse aluno para o
país. No I-20 está o nome do estudante, país, instituição de ensino que ele vai
se matricular, curso e custo dos estudos.
        </div>
  
        <div className='cardtexttitle'>
        Passaporte Válido
        </div>
        <div className='cardtextconteudo'>
        <br/> É recomendado que o seu passaporte esteja pelo menos com 6 meses
restantes de validade na data da viagem. É preciso também que o visto esteja
colado em uma das páginas do passaporte.
        </div>  
        <div className='cardtexttitle'>
        Seguro Saúde aprovado pela
universidade
        </div>
        <div className='cardtextconteudo'>
        <br/> Todo estudante estrangeiro que deseje estudar nos EUA é obrigado por lei a
ter um seguro-saúde, pois este também é um dos documentos de um
intercâmbio esportivo. Este seguro serve para caso o estudante fique doente
ou sofra algum acidente, tenha parte de suas despesas pagas pelo seguro.
A universidade onde você vai estudar precisa aprovar previamente o seguro
que você apresentar. Vale lembrar que o estudante- atleta também precisa
confirmar que o seu seguro contempla acidentes esportivos durantes treinos e
jogos.
Agora que você sabe o que precisa, já pode começar a se preparar.
Com a Team Plus1 Academy o seu sonho dentro e fora de campo está muito
mais próximo do que você imagina!
        </div>    



         </div>

    </div>
   
  </div>
       
  </div>
  
  );
}