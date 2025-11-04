import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/header';
import Footer from '../../components/footer';
import FaqP from '../../components/faq/pos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, far, fas);

function PosGraduacao() {
  return (

<div className='pos-graduacao'> 

    <Cabecalho/>

    <main> 

    <div className='caminho'>
    <Link to = {'/'} > <h3> Home </h3> </Link>
    <hr/>
    <h3> Pós-Graduação </h3>
    </div>    

    <section className='secao0'>

    <div className='texto-sec0'>

       <h2> Pós-Graduação </h2>
       <h1> Inscrições abertas </h1>
       <p>  Eleve seus conhecimentos<br/> para outro nível e cresça<br/> ainda mais em sua carreira! </p>

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

    <section id='explicando-pos'> 

      <h2> Por que fazer uma Pós? </h2>
      <hr />
      <p>  Investir em uma pós-graduação é uma decisão estratégica para quem busca se destacar no mercado de trabalho, aprofundar conhecimentos e impulsionar a carreira. Em um cenário cada vez mais competitivo, ter uma formação complementar ao curso de graduação se tornou um diferencial importante para profissionais de todas as áreas.</p>

       <div id='icons'> 

         <div>
            <FontAwesomeIcon className='icon' icon="fa-solid fa-money-bill-wave" />
            <h3> Maiores chances de empregabilidade e melhores salários: </h3>
            <p> Profissionais com pós-graduação tendem a ocupar cargos mais estratégicos e receber melhores remunerações. </p>
         </div>

         <div>
            <FontAwesomeIcon className='icon' icon="fa-solid fa-user-group" />           
            <h3> Amplia sua rede de contatos (networking): </h3>
            <p>  Você interage com professores experientes e colegas que atuam em diferentes segmentos, criando conexões valiosas para o desenvolvimento profissional. </p>
         </div>

         <div>
            <FontAwesomeIcon className='icon' icon="fa-solid fa-user-check" />           
            <h3> Te prepara para novos desafios: </h3>
            <p>  Você interage com professores experientes e colegas que atuam em diferentes segmentos, criando conexões valiosas para o desenvolvimento profissional. </p>
         </div>


       </div>
    </section>

    <FaqP/>

    </main>

    <Footer/>
</div>

  );
}

export default PosGraduacao;