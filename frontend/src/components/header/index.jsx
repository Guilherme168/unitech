import './index.scss'
import {Link, UseNavigate} from 'react-router-dom'

export default function Cabecalho (){

const navigate = UseNavigate()

return(
 <div className='cabecalho'>

  <div className='principal'>

   <div className='superior'>

       <button className='contato'> ENTRE EM CONTATO </button>
       <img src='/assets/images/logo.png'/> 
       <input> Busque um curso especifico </input>

   </div>

   <div className='inferior'> 

   <h2> Graduação </h2>
   <h2> Pós-Graduação </h2>
   <h2> Cursos Técnicos </h2>
   <h2> Cursos Livres </h2>
   <h2> Bolsas </h2>

   </div>

   </div>
    
 </div>


)

}