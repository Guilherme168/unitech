import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/header';
import Footer from '../../components/footer';
import FaqB from '../../components/faq/bolsa';

function Bolsa() {
  return (

<div id='bolsa'> 

    <Cabecalho/>

    <main> 

     <h2> Bolsa de Estudos </h2>

    <article>    
      <strong style={{color: '#fff', fontWeight: '700', fontFamily: 'Inter'}}> Sobre a Bolsa </strong> 
      <p> A Unitech oferece esta oportunidade de bolsa de estudo para alunos de graduação e pós-graduação, visando facilitar o acesso ao ensino superior. Essas bolsas são fundamentais para apoiar estudantes que demonstram potencial acadêmico, mas que enfrentam desafios financeiros.</p>
      <p> As bolsas têm como objetivo incentivar a dedicação aos estudos e promover a inclusão social. Acreditamos que a educação é um direito de todos e, por isso, buscamos proporcionar condições para que mais pessoas possam realizar seus sonhos acadêmicos. </p>
      <p> Nós oferecemos Bolsas Parciais que cobrem até 55% das mensalidades, disponíveis para alunos com bom desempenho acadêmico. </p>
    </article> 

  <article className='criterios'>
    <strong style={{color: '#fff', fontWeight: '700', fontFamily: 'Inter'}}>  Critérios para a bolsa  </strong>
    <p> Os candidatos devem atender aos seguintes critérios: </p>
    <ul>
     <li> Ter concluído o ensino médio ou equivalente. </li>
     <li> Ter desempenho acadêmico satisfatório (mínimo de 70% de média).</li>
     <li> Comprovar renda familiar mensal per capita inferior a 1,5 salário mínimo. </li>
    </ul>
  </article>
   
  <article className='criterios documentacao'>
    <strong style={{color: '#fff', fontWeight: '700', fontFamily: 'Inter'}}>  Documentação necessária  </strong>
    <p> Os candidatos devem apresentar os seguintes documentos: </p>
    <ul>
     <li> Comprovante de renda familiar (holerites, declaração de imposto de renda, etc.). </li>
     <li> Histórico escolar do ensino médio ou graduação anterior. </li>
     <li> Documento de identidade e CPF. </li>
     <li> Formulário de inscrição específico, disponível no site.</li>
    </ul>
  </article>
   
<article className='criterios inscrever'>
    <strong style={{color: '#fff', fontWeight: '700', fontFamily: 'Inter'}}>  Como se inscrever </strong>
    <p> Os interessados devem seguir os seguintes passos:  </p>
    <ol>
     <li> Clicar em  <Link to={'/inscricaoBolsa'}><span style={{color: '#2955C4', textDecoration: 'underline'}}> Quero Bolsa</span> </Link>, logo abaixo </li>
     <li> Preencher o formulário de inscrição disponível no site. </li>
     <li> Anexar os documentos necessários. </li>
     <li> Aguardar a análise e resultado da seleção.</li>
    </ol>
  </article>

  <article className='criterios inscrever'>
    <strong style={{color: '#fff', fontWeight: '700', fontFamily: 'Inter'}}>  Datas importantes </strong>
    <p style={{width: '38vw'}}> As inscrições para as bolsas de estudo estarão abertas de 01 de junho a 30 de julho. </p>
  </article>

  <article className='criterios inscrever'>
    <strong style={{color: '#fff', fontWeight: '700', fontFamily: 'Inter'}}>  Bolsas </strong>
    <p style={{width: '38vw'}}> Para mais informações, entre em contato pelo e-mail: <span style={{textDecoration: 'underline'}}>bolsas@unitech.edu.br</span> ou pelo telefone: (11) 1234-5678. </p>
  </article>


    </main>

<div id='div'> 
  <h3 style={{color: '#fff', fontFamily: 'Inter', fontWeight: '500'}}> Garanta a sua bolsa! </h3>
  <p style={{color: '#fff', fontFamily: 'Inter', fontWeight: '400'}}> Se você está interessado em solicitar uma bolsa de estudo, preencha o formulário clicando no link abaixo: </p>
  <Link to={'/inscricaoBolsa'}> <span style={{color: '#2955C4', fontFamily: 'Inter', fontWeight: '600', textDecoration: 'underline'}}> Quero Bolsa </span>  </Link>
</div>

<FaqB/>

    <Footer/>
</div>

  );
}

export default Bolsa;