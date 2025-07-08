import './index.scss'

export default function Cabecalho (){

return(
 <div className='cabecalho'>

  <div className='principal'>

   <div className='superior'>

       <button className='contato'> ENTRE EM CONTATO </button>
       <img src='/assets/images/logo.png'/> 
       <input type='text' placeholder='Busque um curso especifico'/>

   </div>

   </div>

   <div className='inferior'> 

   <h2> Graduação </h2>
   <h2> Pós-Graduação </h2>
   <h2> Cursos Técnicos </h2>
   <h2> Cursos Livres </h2>
   <h2> Bolsas </h2>

   </div>
    
 </div>


)

}