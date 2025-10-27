import './index.scss';
import Cabecalho from '../../components/header';

function Graduacao() {
  return (

<div className='graduacao'> 

    <Cabecalho/>

    <main> 

    <div className='caminho'>
    <h3> Home </h3>
    <hr/>
    <h3> Graduação </h3>
    </div>    

    <section className='secao0'>

    <div className='texto-sec0'>

       <h2> Graduação </h2>
       <h1> Inscrições abertas </h1>
       <h3> Turmas de 2026 </h3>
       <button> Inscreva-se </button>

    </div>

     </section>
    <div className='barrinha'/>

    <div className='barra-menu'>

    <h2> Todas as modalidades </h2>
    <h2> Presencial </h2>
    <h2> A Distância </h2>
    <h2> Híbrido </h2>

    </div>

    <section className='aba-cursos'> 

    <h1> Confira nossos cursos </h1>


    </section>

    </main>
</div>

  );
}

export default Graduacao;