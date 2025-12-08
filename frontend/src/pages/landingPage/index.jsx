import './index.scss';
import Cabecalho from '../../components/header';
import Footer from '../../components/footer';
import Carousel from '../../components/carrossel';
import LandingSecao1 from './img1';
import LandingSecao2 from './img2';
import LandingSecao3 from './img3';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, far, fas);

function LandingPage() {
  return (
    <div className="landing-page pagina">
     <Cabecalho/>
     
     <main> 
    
    <Carousel interval={5000}>
      <LandingSecao1/>
      <LandingSecao2/>
      <LandingSecao3/>
    </Carousel>

    <section className='secao1'>

        <h1> Torne-se um(a) profissional competente no mercado com nossos melhores cursos! </h1>

       <div className='carrossel-cursos'> 
        <img className='bd' src='/assets/images/bd.jpg'/>
        <h2 className='bdtitle'> Banco de Dados </h2> 

        <img className='ads' src='/assets/images/ads.jpg'/>
        <h2 className='adstitle'> Análise <br/> e Desenvolvimento de Sistemas </h2> 

        <img className='redes' src='/assets/images/redes_servidores.jpg'/>
        <h2 className='redestitle'> Redes e Servidores </h2> 

       </div>

       <div className='bdtext'>  
          <p>  O curso forma profissionais capacitados para gerenciar, projetar e implementar sistemas de banco de dados, essenciais para o armazenamento, segurança e análise de informações. Com foco prático e tecnológico, o aluno aprende sobre modelagem de dados, SQL, administração de SGBDs e novas tendências como Big Data e NoSQL. </p>  
        </div>

       <div className='adstext'>  
          <p>   O curso prepara profissionais para projetar, desenvolver e manter sistemas e aplicações de software. Com foco prático e alinhado ao mercado, o aluno aprende programação, banco de dados, engenharia de software, segurança da informação e tecnologias web e mobile. Alta demanda em empresas de tecnologia, startups, indústrias e órgãos públicos. </p>  
        </div>

         <div className='redestext'>  
          <p>   O curso forma profissionais aptos a planejar, instalar, configurar e administrar redes de computadores e servidores. O aluno aprende sobre infraestrutura de TI, segurança de redes, serviços em nuvem, virtualização e protocolos de comunicação. Mercado aquecido em provedores de internet, empresas de tecnologia, data centers e áreas de suporte corporativo. </p>  
        </div>


     </section>

    <section className='secao2'>

      <img className='gradiente' src='/assets/images/fundo_gradiente.jpg'/>
      <img className='img-sec2' src='/assets/images/img_sec2.jpg'/>

   <div className='modalidades'>

     <h1> Descubra a melhor forma de estudar T.I em 2025! </h1>

     <div className='opcoes'> 
 
    <h3> PRESENCIAL <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='seta'/> </h3>
    <hr/>
    <h3> EAD <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='seta'/> </h3>
    <hr/>
    <h3> HÍBRIDO <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='seta'/> </h3>
    <hr/>

     </div>

   </div>
     </section>


    <section className='secao3-Graduados'> 
       <div className='texto'> 
        <h1> Já são mais de 50.000 profissionais formados por nós em todo o país! </h1> 
        <p> Venha fazer parte dessa história. Faça já sua <Link to={'/inscricao'}> <span> inscrição aqui.</span> </Link> </p>
       </div>

       <img className='graduanda' src='/assets/images/graduanda.png'/>

       
      </section>

    <section className='secao3-Tecnicos'> 
       <div className='texto'> 
        <h1> Mais de 10.000 técnicos formados em 2024! </h1> 
        <p> Se interessou? Dê uma olhada em nossos cursos técnicos e profissionalizantes no link abaixo: </p>

       <p className='link'> Ver cursos <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='seta'/> </p>

       </div>
       <img className='tecnica' src='/assets/images/tecnicaa.png'/>
      </section>

    <section className='secao4-Avaliacoes'> 

       <h1>Realizando sonhos por todo o país há 20 anos</h1>
       <hr/>

        <div id='avaliacoes'> 

          <div className='avaliacao'>

            <img src='/assets/images/mulher1.jpg'/>
                <div className='nome-curso'>  
                  <h2> Ana Paula <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> </h2>
                  <h3> Análise e <br/> Desenvolvimento <br/>de Sistemas </h3>
                </div>

            <p>  " Estou extremamente satisfeita com minha experiência no curso de Análise e Desenvolvimento de Sistemas. Desde o início, pude perceber o quanto a grade curricular é bem estruturada e voltada para as demandas reais do mercado de trabalho. As disciplinas abordam desde fundamentos da lógica de programação até tópicos mais avançados, como banco de dados, segurança da informação e desenvolvimento web e mobile. " </p>    
          </div>


          <div className='avaliacao'>

            <img src='/assets/images/mulher2.jpg'/>
                <div className='nome-curso'>  
                  <h2> Valéria Oliveira <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> </h2>
                  <h3> Banco de Dados </h3>
                </div>

            <p>  " O curso de Banco de Dados superou minhas expectativas! Aprendi a modelar, criar e gerenciar bancos com segurança e eficiência. Os conteúdos são claros e bem aplicados na prática. Com certeza, saio muito mais preparada para o mercado de trabalho. " </p>    
          </div>


           <div className='avaliacao'>

            <img src='/assets/images/cara-sorridente.jpg'/>
                <div className='nome-curso'>  
                  <h2> Wagner Santos <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> </h2>
                  <h3> Redes e Servidores </h3>
                </div>

            <p>  " O curso de Redes e Servidores superou minhas expectativas, proporcionando uma base sólida em conceitos teóricos e práticos.  As atividades práticas foram especialmente valiosas, permitindo aplicar o conhecimento em situações reais. Senti que as aulas foram dinâmicas e envolventes, promovendo um ambiente colaborativo. Estou animado para aplicar o que aprendi em minha carreira futura! " </p>    

          </div>

       </div>

       </section>

    <section className='secao4-part2'>

        <div className='fundo-laranja'>
           <img src='/assets/images/secao4_imagem.png'/>
        </div>

        <div className='texto'> 
          <h1> Se interessou? Por que não dar uma olhada em nossos cursos? </h1>
   
          <div className='grad-pos'>
            <Link to = {'/graduação'}>   <p className='grad'> <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right"/> Graduação </p> </Link>  
            <Link to ={'/pós-graduação'}> <p className='pos'> <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" /> Pós-Graduação </p> </Link>
          </div>

          <div className='tec-livre'>
           <Link to ={'/tecnico'}>  <p className='tec'> <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" /> Técnico </p> </Link>
           <Link to = {'/livre'}>  <p className='livre'> <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" /> Livre </p> </Link> 
          </div>

        </div>

       </section>


    </main>

  <Footer/>

    </div>
  );
}

export default LandingPage;