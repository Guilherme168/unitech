import './index.scss';

export default function FaqG (){

return(
 <div id='container'>
    <div id='perguntas'>

      <h2> Perguntas frequentes </h2>
       
         <div className='pergunta'> 
            <h3> Os cursos são reconhecidos pelo MEC? </h3>
            <p> Sim, todos os nossos cursos são reconhecidos pelo MEC. </p>
         </div>

         <div className='pergunta'> 
            <h3> Os cursos tem TCC obrigatório? </h3>
            <p> Os cursos de Graduação variam em relação a necessidade de efetuar um TCC. Cheque as informações de seu curso. </p>
         </div>

         <div className='pergunta'> 
            <h3> Preciso de alguma formação prévia ou conhecimento específico? </h3>
            <p> Não, os cursos de graduação não requerem nenhum conhecimento anterior na área. </p>
         </div>

         <div className='pergunta'> 
            <h3> Os cursos de graduação dão diploma/certificado? </h3>
            <p> Sim, todos os cursos de graduação geram um diploma de ensino superior. </p>
         </div>
        
         <div className='pergunta'> 
            <h3> Há programas de intercâmbio, pesquisa ou extensão? </h3>
            <p> Sim, oferecemos programas de intercâmbio para vários cursos. Para mais informações, cheque os detalhes de seu curso. </p>
         </div>

    </div>

    <img src='/assets/images/faq.png'/>


    </div>

)
}