import './index.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, far, fas);

export default function Footer (){

return(
 <div className='footer'>

 <div className='principal'>
  <div className='superior'>

   <div className='coluna1'>
   <h2> CURSOS DISPONÍVEIS </h2>
   <Link to = {'/graduação'} > <p> Graduação </p> </Link>
   <Link to = {'/pós-graduação'}> <p> Pós-Graduação </p> </Link>
   <Link to = {'/técnico'}>  <p> Técnicos e Profissionalizantes </p> </Link>
   <Link to = {'/livre'}> <p> Livres </p> </Link>  
   </div>

   <div className='coluna2'>
   <h2> VESTIBULAR E BOLSAS </h2>
   <Link to={'/inscricao'}> <p> FAÇA SUA INSCRIÇÃO </p> </Link> 
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
    <FontAwesomeIcon icon="fa-brands fa-instagram" />
    <FontAwesomeIcon icon="fa-brands fa-facebook" />
    <FontAwesomeIcon icon="fa-brands fa-linkedin" />

   </div>

     </div>
 </div>


)

}