import './index.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, far, fas);

export default function Cabecalho (){

return(
 <header className='cabecalho'>

  <div className='principal'>

   <div className='superior'>

       <button className='contato'> ENTRE EM CONTATO </button>
       <Link to = {'/'}> <img src='/assets/images/logo.png'/> </Link>
       <div className='pesquisa'>
       <input type='text' placeholder='Busque um curso especifico'/> 
       <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" id='lupa'/>
       </div>

   </div>

   </div>

   <div className='inferior'> 

   <Link to = {'/graduação'}> <h2> <FontAwesomeIcon icon="fa-solid fa-book" /> Graduação </h2> </Link> 
   <Link to = {'/pós-graduação'}> <h2> <FontAwesomeIcon icon="fa-solid fa-book-open" /> Pós-Graduação </h2> </Link>
   <Link to = {'/técnico'}> <h2> <FontAwesomeIcon icon="fa-solid fa-clipboard" /> Cursos Técnicos </h2> </Link> 
   <Link to = {'/livre'}> <h2> <FontAwesomeIcon icon="fa-regular fa-clock" /> Cursos Livres </h2> </Link> 
   <Link to = {'/bolsa'}> <h2> <FontAwesomeIcon icon="fa-solid fa-money-bill" /> Bolsas </h2> </Link>  

   </div>
    
 </header>
)

}