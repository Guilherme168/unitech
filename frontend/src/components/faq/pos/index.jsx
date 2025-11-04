import './index.scss';

export default function FaqP(){

return(
 <div id='container'>
    <div id='perguntas'>

      <h2> Perguntas frequentes </h2>
       
         <div className='pergunta'> 
            <h3>  O que é uma pós-graduação? </h3>
            <p>  Pós-graduação é o nível de ensino que vem após a graduação (curso superior). </p>
         </div>

         <div className='pergunta'> 
            <h3> Quem pode fazer uma pós-graduação? </h3>
            <p>  Qualquer pessoa que tenha concluído um curso superior (bacharelado, licenciatura ou tecnólogo). </p>
         </div>

         <div className='pergunta'> 
            <h3> Pós-graduação EAD tem o mesmo valor que a presencial?</h3>
            <p>  Sim, desde que seja oferecida por uma instituição reconhecida pelo MEC, o diploma da pós-graduação EAD tem a mesma validade legal da presencial. </p>
         </div>

         <div className='pergunta'> 
            <h3>  Posso fazer uma pós-graduação em área diferente da minha graduação? </h3>
            <p>   Uma Pós é uma especialização na área em que se formou, então não é possível migrar. </p>
         </div>
        
         <div className='pergunta'> 
            <h3>  É necessário fazer TCC na pós-graduação? </h3>
            <p>   Depende. A necessidade de TCC fica a critério da instituição para cada curso.</p>
         </div>

    </div>

    <img src='/assets/images/faq.png'/>


    </div>

)
}