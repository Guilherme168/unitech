import './img3.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, far, fas);

function LandingSecao3() {
  return (
     
     <main> 
    <section className='secao03'>

      <img className='universidade' src='/assets/images/universidade_fundo.jpg'/>
      <img className='mulher' src='/assets/images/img-sec0-2.png'/>

      <div className='texto'>

        <h1> Não deixe as dificuldades barrarem seu futuro! </h1>
        <p> Inscreva-se e descubra como nossas bolsas de desconto podem ajudar você a realizar seu sonho acadêmico! </p>
        <h3> <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='seta'/> Saiba mais sobre nossas bolsas </h3>

      </div>

     </section>

    </main>
  );
}

export default LandingSecao3;
