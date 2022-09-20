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
      <Link to={'./signin'}><img className='divicon' src={Iconfranquia} alt=""/> </Link>
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
        A Franquia Plus 1 Academy
        </div>
        <div className='cardtextconteudo'>
                A Plus1 Academy é a maior rede de academias especializada no mercado
        Brasil/Estados Unidos.<br/> Nossa academia de basquete prepara estudantes-
        atletas para que alcancem sucesso nos mais diversos aspectos da vida,
        utilizando o esporte e a educação como ferramenta de desenvolvimento.
        </div>

        <div className='cardtexttitle'>
        MARCA RECONHECIDA E CONSOLIDADA
        </div>
        <div className='cardtextconteudo'>
        O Marketing é sem dúvida um dos diferenciais da Plus1 Academy. Nos preocupamos sempre
na forma de relacionamento e satisfação com os clientes, fortalecimento da marca, exposição
e produção de conteúdos relevantes, associando sempre nossa marca à excelência.
        </div>
        <div className='cardtexttitle'>
        METODOLOGIAS DE DESENVOLVIMENTO EXCLUSIVAS
        </div>
        <div className='cardtextconteudo'>
        A Plus1 Academy é um novo conceito em academia. Focamos no desenvolvimento pleno do
ser humano, envolvendo metodologias e materiais exclusivos na área de desenvolvimento
pessoal, inglês, basquete e assessoria para bolsas em faculdades nos EUA e clubes brasileiros.
        </div>
        <div className='cardtexttitle'>
        MODELO JÁ TESTADO COM ÁREAS FUNCIONAIS BEM DEFINIDAS
        </div>
        <div className='cardtextconteudo'>
        Transferimos todo nosso know-how através de treinamento, manuais e processos bem
definidos que fazem cada unidade funcionar com excelência. Essas áreas incluem o setor de

vendas, operações, gestão, financeiro entre outras.
        </div>
        <div className='cardtexttitle'>
        Vantagens em ser franqueado
        </div>
        <div className='cardtextconteudo'>
        A PLUS1 ACADEMY foi adaptada ao conceito de franquia visando o
franqueado, pois, quanto mais simples e enxuta for a operação, melhor
será a performance do franqueado. Todas as unidades deverão seguir o
padrão PLUS1 ACADEMY possuir uma ótima estrutura de treinamentos e

assessoria, além de excelência no atendimento.
        </div>

        <div className='cardtextconteudo'>
             1 - Direito do uso da marca já consolidada e das plataformas da PLUS1 Academy.
       <br/> 2 - Transferência do Know-how de todo o modelo de negócio já testado e
comprovadamente rentável.
       <br/>3 - Treinamentos e cessão de manuais.
       <br/>4 - Metodologias
       <br/>5 - Acompanhamento e visitas de consultoria.
       <br/> 6 - Modelo de Receita Recorrente.
       <br/> 7 - Investimento Inicial Acessível para um modelo inteligente.
       <br/> 8 - Gestão e Suporte.
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
        <div className='cardtextconteudo'>
        Locais de interesse
Maioria das cidades do Brasil
<br/>Investimento Total
De 89 mil a 150 mil
<br/>Faturamento médio mensal
40 mil
<br/>Royalties
1 mil/mês a partir do 4º mês
        </div>







      </div>

    </div>
   
  </div>
       
  </div>
  
  );
}