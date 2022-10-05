import React from 'react';
import { Link } from 'react-router-dom';
import Iconfranquia from '../../../assets/left-arrow.png';
import './styles.css'
import Foot from '../../Footer';
import logocard from '../../../assets/logoplus.png';

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
  <div className='divcardexternone'>
     <div className='topinit'>
     <div className='topinit'>
      <div className='divtophomeback'>
        <Link to={'/'}>
          <img className='divicon' src={Iconfranquia} alt=""/>
        </Link>
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
         <div className='logocard'>
          <img src={logocard} className="logocardimg" alt=""/>
         </div>





      <div className='cardtexttitle'>
        Plus 1 Academy
        </div>
        <div className='cardtextconteudo'>
        Somos uma rede de academias de desenvolvimento pessoal através do Basquete e Educação. Preparamos estudantes-atletas para que alcancem sucesso no esporte e na vida.
        </div>

        <div className='cardtexttitle'>
        A EMPRESA
        </div>
        <div className='cardtextconteudo'>
        Fundada em 2019, a Plus1 Academy é uma empresa de desenvolvimento pessoal através do esporte alinhado à educação. Oferecemos aos nossos estudantes-atletas muito mais do que um treinamento esportivo de alta performance, mas também um suporte educacional que o prepara para alcançar o sucesso em todos os âmbitos da vida. O atleta tem ainda a oportunidade de ingressar em universidades dos Estados Unidos com bolsas de estudos vinculadas ao Esporte Universitário. O estudante-atleta da Plus1 Academy é preparado com aulas de inglês, treinamentos de futebol em alto nível e através de nossa plataforma educacional tem acesso a conteúdos e aulas exclusivas sobre mentalidade, basquete e outros temas que não são aprendidos em sala de aula.
        </div>
        <div className='cardtexttitle'>
        RESULTADO E ATENÇÃO
        </div>
        <div className='cardtextconteudo'>
        O maior objetivo da Plus1 Academy é de que todos os nossos estudantes-atletas vençam não somente nas quadras, mas também nos estudos, na carreira e na vida. Queremos exceder as expectativas de cada atleta, pai ou treinador com o qual trabalhamos. Nossa motivação é possibilitar um futuro de sucesso para nossos alunos, oferecendo as melhores oportunidades.
        </div>
        <div className='cardtexttitle'>
        TRABALHO HUMANIZADO
        </div>
        <div className='cardtextconteudo'>
        Com o crescimento de nossas academias, percebemos que os estudantes-atletas têm objetivos muito diferentes. Por isso, somos muito mais do que uma agência de intercâmbio esportivo. Juntos, vamos revolucionar o futebol e a educação no Brasil.
        </div>
        <div className='cardtexttitle'>
        CONFIANÇA NO EMBARQUE
        </div>
        <div className='cardtextconteudo'>
        Os atletas que optam por estudar e jogar fora do país não precisam se preocupar com o nível das universidades dos Estados Unidos. Isso porque temos o cuidado de enviar atletas apenas para universidades que passam pelo nosso controle de qualidade e pelas quais temos total confiança.
        </div>

        <div className='cardtexttitle'>
        BASQUETE EM ALTO NÍVEL
        </div>
        <div className='cardtextconteudo'>
        As ligas esportivas universtárias nos Estados Unidos são extremamente competitivas e oferecem aos atletas toda estrutura e recursos necessários para que o atleta possa maximizar seu talento e desempenho. Todos anos, milhares de atletas saem das ligas universitárias para dar sequência a uma carreira esportiva profissional em esportes como Futebol, Basquete, Tênis, Natação, Volei, Golfe e muitos outros. Com mais de 2 mil universidades em todo país oferecendo esporte competitivo, existem muitas oportunidades mesmo para atletas que não almejam ou possuem o nível competitivo suficiente para seguir uma carreira profissional. No Brasil muitos atletas ao concluir o Ensino Médio são confrontados com a decisão entre tentar uma carreira profissional no esporte ou abandonar o esporte para concentrar-se nos estudos. Infelizmente por falta de apoio muitos desses atletas acabam perdendo ambas oportunidades. Uma carreira universitária nos EUA oferece a chance única de seguir os dois caminhos com segurança.
        </div>

        <div className='cardtexttitle'>
        PRÉ-REQUISITOS
        </div>
        <div className='cardtextconteudo'>
        Ensino médio completo  Praticar algum esporte a nível competitivo (Já ter participado de treinamentos e competições).  Nível de Inglês intermediário, suficiente para obter notas mínimas exigidas nos exames TOEFL e SAT (As notas mínimas exigidas variam entre as diferentes ligas esportivas e universidades)*
        </div>
        <div className='cardtexttitle'>
        VANTAGENS
        </div>
        <div className='cardtextconteudo'>
        Estude nas melhores universidades do mundo.  Treinamento esportivo de alto-rendimento paralelo aos estudos.  Participação em competições esportivas de alto nível.  Perspectiva de continuar praticando o esporte profissionalmente.
         </div>
         <div className='cardtexttitle'>
         O QUE A PLUS1 ACADEMY FAZ?
        </div>
        <div className='cardtextconteudo'>
        Avaliação esportiva e acadêmica para determinar as chances de admissão e perspectivas de bolsas (esportivas e/ou acadêmicas).  Pesquisar as universidades que se encaixam no perfil esportivo e acadêmico e onde o atleta tenha chances de bolsas (esportivas e/ou acadêmicas)  Auxílio na preparação de vídeos e curriculum esportivo e acadêmico que serão enviados para as universidades e treinadores.  Envio de vídeos e informações sobre o atleta para as universidades selecionadas.  Contato com treinadores universitários para negociação de bolsas esportivas.  Contato com universidade para negociação de bolsas acadêmicas e outros auxílios financeiros disponíveis.  Avaliação do nível de Inglês do atleta e auxílio na preparação para os exames TOEFL e/ou SAT.  Auxílio na obtenção de passaporte e visto de estudante.  Suporte e acompanhamento até o atleta embarcar.
         </div>
      







      </div>

     

    </div>
   
  </div>


  
       
  </div>
    
    
  
  );
}