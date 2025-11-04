import './index.scss';

export default function FaqL(){

return(
 <div id='container'>
    <div id='perguntas'>

      <h2> Perguntas frequentes </h2>
       
         <div className='pergunta'> 
            <h3>  O que é um curso livre? </h3>
            <p>   São cursos de curta duração, voltados à capacitação, atualização ou aperfeiçoamento em áreas específicas. </p>
         </div>

         <div className='pergunta'> 
            <h3>  Quem pode se inscrever em cursos livres? </h3>
            <p>   Qualquer pessoa interessada (em geral).
                  Alguns cursos podem exigir idade mínima, escolaridade básica ou conhecimento prévio. </p>
         </div>

         <div className='pergunta'> 
            <h3> Qual é a carga horária dos cursos livres? </h3>
            <p>  Varia bastante: de poucas horas (4–8h) até algumas semanas ou meses (40h, 60h, 120h). </p>
         </div>

         <div className='pergunta'> 
            <h3>  O curso livre emite certificado? </h3>
            <p>   Sim, geralmente é fornecido um certificado de participação ou de conclusão, que pode ser usado para horas complementares, concursos ou currículo.. </p>
         </div>
        
         <div className='pergunta'> 
            <h3>  Preciso ser aluno da universidade para participar? </h3>
            <p>   Normalmente, não. A maioria dos cursos livres é aberta ao público externo. </p>
         </div>

        </div>

    <img src='/assets/images/faq.png'/>


    </div>

)
}