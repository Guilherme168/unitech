import './index.scss';

export default function FaqB (){

return(
 <div id='container'>
    <div id='perguntas'>

      <h2> Perguntas frequentes </h2>
       
         <div className='pergunta'> 
            <h3> Quem pode se inscrever para as bolsas de estudo? </h3>
            <p> Todos os alunos que tenham concluído o ensino médio ou equivalente e que atendam aos critérios de desempenho acadêmico e renda familiar.  </p>
         </div>

         <div className='pergunta'> 
            <h3> Qual é o valor das bolsas oferecidas? </h3>
            <p> As bolsas oferecidas cobrem até 55% das mensalidades. O valor exato pode ser consultado diretamente com a coordenação do curso. </p>
         </div>

         <div className='pergunta'> 
            <h3> Quando as inscrições para as bolsas de estudo estarão abertas? </h3>
            <p> As inscrições para as bolsas de estudo estarão abertas de 01 de Novembro a 30 de Novembro. É importante ficar atento a essas datas e se inscrever dentro do prazo.  </p>
         </div>

         <div className='pergunta'> 
            <h3> Como posso comprovar minha renda familiar? </h3>
            <p> A renda familiar deve ser comprovada através de documentos como declaração de imposto de renda ou uma declaração de renda familiar preenchida e assinada pelo responsável financeiro da família. </p>
         </div>
        

    </div>

    <img src='/assets/images/faq.png'/>


    </div>

)
}