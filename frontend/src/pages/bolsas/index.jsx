import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/header';
import Footer from '../../components/footer';
import FaqB from '../../components/faq/bolsa';

function Bolsa() {
  return (

<div className='bolsa'> 

    <Cabecalho/>

    <main> 

  

    <FaqB/>

    </main>

    <Footer/>
</div>

  );
}

export default Bolsa;