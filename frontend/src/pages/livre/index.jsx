import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/header';
import Footer from '../../components/footer';
import FaqL from '../../components/faq/livre';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, far, fas);

function Livre() {
  return (

<div className='livre'> 

    <Cabecalho/>

    <main> 

    <div className='caminho'>
    <Link to = {'/'} > <h3> Home </h3> </Link>
    <hr/>
    <h3> Cursos Técnicos </h3>
    </div>    

    <section className='secao0-livre'>

     <img id='imgsec0' src='/assets/images/universidade_fundo.jpg'/>  
     <img id='estudante' src='/assets/images/cursosLivres_img.png'/>

    <div className='texto-sec0-livre'>

       <h2> Cursos <span> livres </span> </h2>
       <p>  Procurando por oportunidades de aprendizado rápidas e acessíveis afim de se aprimorar ou desenvolver novas habilidades? Aqui tem! </p>

    </div>

     </section>

    <div className='barrinha'/>

     <section id='form-livre'> 

      <h2> Afinal, o que são cursos livres? </h2>
      <hr/>
      <p>  Os <span> cursos livres </span> são formações de curta duração, voltadas para a ampliação de conhecimentos, desenvolvimento de novas habilidades e atualização profissional em diversas áreas do saber. Com uma proposta flexível e acessível, esses cursos não exigem formação acadêmica prévia, sendo abertos a estudantes, profissionais e ao público em geral que busca aprendizado rápido, prático e de qualidade.</p>

    <div id='vantagens'> 

      <h3> <FontAwesomeIcon className='seta' icon="fa-solid fa-chevron-right" /> Através de nossos cursos livres, você: </h3>

         <div>
           <label> Tem flexibilidade no horário. </label>
           <FontAwesomeIcon icon="fa-solid fa-square-check" />
           <label> Ganha certificado reconhecido nacionalmente. </label>
           <FontAwesomeIcon icon="fa-solid fa-square-check" />
         </div>

         <div>
           <label> Aprende sobre diversos temas da área de T.I. </label>
           <FontAwesomeIcon icon="fa-solid fa-square-check" />
           <label> Sai ganhando com preços acessíveis e realistas. </label>
           <FontAwesomeIcon icon="fa-solid fa-square-check" />
         </div>

       </div>
    </section>


    <div className='barra-menu'>

        <h2> Todas as modalidades </h2>
        <h2> Presencial </h2>
        <h2> A Distância </h2>

    </div>

    <section className='aba-cursos'> 

      <h1> Confira nossos cursos </h1>

    </section>


    <FaqL/>

    </main>

    <Footer/>
</div>

  );
}

export default Livre;