import './index.scss';

export default function FaqI (){

return(
 <div id='container'>
    <div id='perguntas'>

      <h2> Perguntas frequentes </h2>
       
         <div className='pergunta'> 
            <h3> Qual é o prazo para a inscrição no vestibular? </h3>
            <p> As inscrições estarão abertas de 1º de Outubro a 30 de Novembro de 2025. </p>
         </div>

         <div className='pergunta'> 
            <h3> Como posso pagar a taxa de inscrição? </h3>
            <p> A taxa de inscrição de R$ 50,00 pode ser paga via cartão de crédito, boleto bancário ou pix. </p>
         </div>

         <div className='pergunta'> 
            <h3> Quais documentos são necessários para a bolsa? </h3>
            <p> Os documentos necessários incluem uma foto recente, cópia do histórico escolar e comprovante de renda familiar para solicitação de bolsas de estudo. </p>
         </div>

         <div className='pergunta'> 
            <h3> Como saber se minha inscrição foi confirmada? </h3>
            <p> Após enviar sua inscrição, você receberá um e-mail de confirmação com detalhes sobre o vestibular e o acesso ao portal do aluno. </p>
         </div>
        
         <div className='pergunta'> 
            <h3> Posso alterar meu curso após a inscrição? </h3>
            <p> Alterações no curso escolhido podem ser feitas até o prazo final de inscrição, 30 de abril de 2025. Após essa data, não será possível realizar mudanças. </p>
         </div>

    </div>

    <img src='/assets/images/faq.png'/>


    </div>

)
}