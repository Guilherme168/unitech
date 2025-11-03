import './img2.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, far, fas);

function LandingSecao2() {
  return (
     
     <main> 
    <section className='secao02'>

      <div className='textos'> 
        <div className='container'> 
           <h1> Seu sonho começa aqui!</h1>
           <p> Desconto de 15% nos três primeiros meses de matrícula para novos alunos do vestibular </p>
        </div>

       <h1> Inscrições estão abertas! </h1>
       <p> <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='seta' /> Inscreva-se já aqui </p>
      </div>
       
       <img className='g' src='/assets/images/img-sec0-1.jpg'/>

     </section>

    </main>
  );
}

export default LandingSecao2;
