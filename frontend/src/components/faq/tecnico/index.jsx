import './index.scss';

export default function FaqT(){

return(
 <div id='container'>
    <div id='perguntas'>

      <h2> Perguntas frequentes </h2>
       
         <div className='pergunta'> 
            <h3>  O que é um curso técnico? </h3>
            <p>   É uma formação de nível médio voltada para o desenvolvimento de competências profissionais específicas, com foco prático e duração mais curta que um curso superior. </p>
         </div>

         <div className='pergunta'> 
            <h3>  Qual é a duração de um curso técnico? </h3>
            <p>   A maioria dos cursos técnicos tem duração entre 1 a 2 anos, dependendo da área e da carga horária. </p>
         </div>

         <div className='pergunta'> 
            <h3> Quem pode fazer um curso técnico? </h3>
            <p>  Pessoas que estejam cursando o ensino médio, ou que já o finalizaram. </p>
         </div>

         <div className='pergunta'> 
            <h3>  Um curso técnico é igual a um curso superior? </h3>
            <p>   Não. O curso técnico é uma formação de nível médio, enquanto o curso superior (como tecnólogo, bacharelado ou licenciatura) é de nível superior. Ambos são válidos e reconhecidos, mas têm objetivos e durações diferentes. </p>
         </div>
        
         <div className='pergunta'> 
            <h3>  O diploma do curso técnico é reconhecido pelo MEC? </h3>
            <p>   Sim, desde que o curso esteja regularizado e autorizado por instituições reconhecidas. O diploma tem validade nacional. </p>
         </div>

        </div>

    <img src='/assets/images/faq.png'/>


    </div>

)
}