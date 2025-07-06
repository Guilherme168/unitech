import './index.scss';
import Cabecalho from '../../components/header';

function LandingPage() {
  return (
    <div className="landing-page pagina">
     <Cabecalho/>
     
     <main> 
     <section className='secao0'>

       <div className='div-blur'>
        <div className='texto-sec0'>

       <h1> Suba de nível na área da tecnologia! </h1>
       <p> Avance para o próximo nível com nossos cursos de Graduação, Pós-Graduação, Técnicos e muito mais! </p>

        </div>
       </div>
     </section>

     <section className='secao1'>

        <img className='textura' src='/frontend/public/assets/images/textura.jpg'/> 
        <h1> Torne-se um(a) profissional competente no mercado com nossos melhores cursos! </h1>

       <div className='carrossel-cursos'> 
        <img className='bd' src='/assets/images/bd.jpg'/>
        <img className='ads' src='/assets/images/ads.jpg'/>
        <img className='redes' src='/assets/images/redes_servidores.jpg'/>
       </div>

     </section>

     <section className='secao2'>

      <img className='textura' src='/frontend/public/assets/images/textura.jpg'/> 
      <img className='gradiente' src='/frontend/public/images/fundo_gradiente.jpg'/>
      <img className='img-sec2' src='/frontend/public/images/img-sec2.jpg'/>

   <div className='modalidades'>

     <h1> Descubra a melhor forma de estudar T.I em 2025! </h1>

     <div className='opcoes'> 
 
    <h3> PRESENCIAL </h3>
    <h3> EAD </h3>
    <h3> HÍBRIDO</h3>

     </div>

   </div>
     </section>

      <section className='secao3 - Graduados'> 
       <div className='texto'> 
        <h1> Já são mais de 50.000 profissionais formados por nós em todo o país! </h1> 
        <p> Venha fazer parte dessa história. Faça já sua inscrição aqui. </p>
       </div>
      </section>

      <section className='secao3 - Tecnicos'> 
       <div className='texto'> 
        <h1> Mais de 10.000 técnicos formados em 2024! </h1> 
        <p> Se interessou? Dê uma olhada em nossos cursos técnicos e profissionalizantes no link abaixo: </p>

       <p className='link'> Ver cursos </p>

       </div>
      </section>

       <section className='secao4 - Avaliacoes'> 

       <div className='avaliacoes'> 

       <h1>Realizando sonhos por todo o país há 20 anos</h1>
       <br/>

       <div className='resenhas'>

        <div className='ana'>
          <h1> Ana Paula </h1>
          <p> Análise e Desenvolvimento de Sistemas </p>
           <img src='/frontend/public/images/mulher1.jpg'/>
        </div>

        <div className='valeria'>
          <h1> Valéria Oliveira </h1>
          <p> Banco de Dados</p>
           <img src='/frontend/public/images/mulher2.jpg'/>
        </div>

        <div className='wagner'>
          <h1> Wagner Santos </h1>
          <p> Redes e Servidores </p>
           <img src='/frontend/public/images/cara-sorridente.jpg'/>
        </div>

       </div>

       </div>

       </section>

       <section className='secao4 part2'>

        <div className='fundo-laranja'>
           <img src='/frontend/public/images/secao4_imagem.png'/>
        </div>

        <div className='texto'> 
          <h1> Se interessou? Por que não dar uma olhada em nossos cursos? </h1>
   
          <div className='grad&pos'>
            <p> Graduação </p>
            <p> Pós-Graduação </p>
          </div>

          <div className='tec&livre'>
            <p> Técnico </p>
            <p> Livre </p>
          </div>

        </div>

       </section>

    </main>


    </div>
  );
}

export default LandingPage;
