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
        Faculdades
     
        </div>
        <div className='cardtextconteudo'>
           <br/>As ligas esportivas universtárias nos Estados Unidos são extremamente competitivas e oferecem aos atletas toda estrutura e recursos necessários para que o atleta possa maximizar seu talento e desempenho. Todos anos, milhares de atletas saem das ligas universitárias para dar sequência a uma carreira esportiva profissional em esportes como Futebol, Basquete, Tênis, Natação, Volei, Golfe e muitos outros. Com mais de 2 mil universidades em todo país oferecendo esporte competitivo, existem muitas oportunidades mesmo para atletas que não almejam ou possuem o nível competitivo suficiente para seguir uma carreira profissional. No Brasil muitos atletas ao concluir o Ensino Médio são confrontados com a decisão entre tentar uma carreira profissional no esporte ou abandonar o esporte para concentrar-se nos estudos. Infelizmente por falta de apoio muitos desses atletas acabam perdendo ambas oportunidades. Uma carreira universitária nos EUA oferece a chance única de seguir os dois caminhos com segurança. PRÉ-REQUISITOS
Ensino médio completo
<br/>
<br/>
Praticar algum esporte a nível competitivo (Já ter participado de treinamentos e competições).
Nível de Inglês intermediário, suficiente para obter notas mínimas exigidas nos exames TOEFL e SAT (As notas mínimas exigidas variam entre as diferentes ligas esportivas e universidades)*
        </div>

        <div className='cardtexttitle'>
        VANTAGENS
        </div>
        <div className='cardtextconteudo'>
        <br/>Estude nas melhores universidades do mundo.
        <br/>Treinamento esportivo de alto-rendimento paralelo aos estudos.
        <br/>Participação em competições esportivas de alto nível.
        <br/>Perspectiva de continuar praticando o esporte profissionalmente.
        </div>
        

        <div className='cardtexttitle'>
        Projeções financeiras da franquia
        </div>
        <div className='cardtextconteudo'>
        Temos 3 modelos de franquia projetados de acordo com o porte de cada
região/cidade/país. Temos um modelo mais enxuto, outro modelo de
médio porte e o um modelo de padrão para cidades de grande porte. O
investimento inicial e as projeções financeiras dependem do modelo
escolhido e tamanho da unidade. Seguem os valores médios do nosso
modelo padrão.
        </div>
         </div>

    </div>
   
  </div>
       
  </div>
  
  );
}