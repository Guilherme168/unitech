import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/header';
import Footer from '../../components/footer';
import FaqT from '../../components/faq/tecnico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, far, fas);

function Tecnico() {
  return (

<div className='tecnico'> 

    <Cabecalho/>

    <main> 

    <div className='caminho'>
    <Link to = {'/'} > <h3> Home </h3> </Link>
    <hr/>
    <h3> Cursos Técnicos </h3>
    </div>    

    <section className='secao0-tecnico'>

    <div className='texto-sec0-tecnico'>

       <h2> Cursos <span> técnicos </span> </h2>
       <p>  Aprimore-se e desenvolva competências valorizadas pelo mercado de trabalho através de nossos cursos técnicos. </p>

    </div>

     </section>

    <div className='barrinha'/>

    <div className='barra-menu'>

        <h2> Todas as modalidades </h2>
        <h2> Presencial </h2>
        <h2> A Distância </h2>

    </div>

    <section className='aba-cursos'> 

      <h1> Confira nossos cursos </h1>

    </section>



    <section id='form-tec'> 

      <h2> Formação Técnica </h2>
      <hr/>
      <p>  Os <span> cursos técnicos </span>são ideais para quem busca ingressar rapidamente no mercado de trabalho com uma formação sólida e de qualidade. Com foco na aplicação prática dos conhecimentos, esses cursos proporcionam habilidades específicas e atualizadas, alinhadas às demandas reais das empresas e setores produtivos.</p>

      <p>  Voltados tanto para estudantes do ensino médio quanto para quem já concluiu essa etapa, os cursos técnicos combinam teoria e prática em laboratórios bem equipados, projetos integradores e parcerias com empresas. Tudo isso para garantir que você esteja preparado para os desafios da profissão desde o primeiro dia de atuação. </p>

    <div id='vantagens'> 

      <h3> <FontAwesomeIcon className='seta' icon="fa-solid fa-chevron-right" /> Através de cursos técnicos, você: </h3>

         <div>
           <label> Se forma mais rápido, entre 1 e 2 anos. </label>
           <FontAwesomeIcon icon="fa-solid fa-square-check" />
           <label> Ganha certificado reconhecido nacionalmente. </label>
           <FontAwesomeIcon icon="fa-solid fa-square-check" />
         </div>

         <div>
           <label> Aprende, na prática, como atuar na área em questão. </label>
           <FontAwesomeIcon icon="fa-solid fa-square-check" />
           <label> Tem oportunidades de inserção profissional. </label>
           <FontAwesomeIcon icon="fa-solid fa-square-check" />
         </div>

       </div>
    </section>

    <FaqT/>

    </main>

    <Footer/>
</div>

  );
}

export default Tecnico;