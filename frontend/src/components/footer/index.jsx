import './index.scss'

export default function Footer (){

return(
 <div className='footer'>

 <div className='principal'>
  <div className='superior'>

   <div className='coluna1'>
   <h2> CURSOS DISPONÍVEIS </h2>
   <p> Graduação </p>
   <p> Pós-Graduação </p>
   <p> Técnicos e Profissionalizantes </p>
   <p> Livres </p>
   </div>

   <div className='coluna2'>
   <h2> VESTIBULAR E BOLSAS </h2>
   <p> FAÇA SUA INSCRIÇÃO </p>
   <p> BOLSAS E FINANCIAMENTOS </p>
   </div>


   <div className='coluna3'>
   <h2> SAIBA MAIS </h2>
   <p> FALE CONOSCO </p>
   <p> SOBRE NÓS </p>
   </div>

   </div>

   <hr/>

   <div className='inferior'> 
   <img className='logo'  src='/assets/images/logo.png'/> 
   <img className='medalha' src='/assets/images/selo-MEC.png'/> 
   <h2> Desenvolvido por DevFox | @Todos os direitos reservados </h2>
   </div>

     </div>
 </div>


)

}