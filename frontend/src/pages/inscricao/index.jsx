import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/header';
import Footer from '../../components/footer';
import FaqI from '../../components/faq/inscricao';

function Inscricao() {
  return (

<div className='inscricao'> 

    <Cabecalho/>

    <main> 

    <div className='caminho'>
    <Link to = {'/'} > <h3> Home </h3> </Link>
    <hr/>
    <h3> Inscrição </h3>
    </div>    

   <section id='pag-inscricao'>

    <h1> Inscrição para o <br></br> Vestibular 2026 </h1>
    <p> Bem-vindo à página de inscrição para o Vestibular 2026!  Aqui você pode se inscrever para os cursos oferecidos pela nossa universidades. As incrições estâo abertas de  1° de Outubro a 30 de Novembro de 2025. O vestibular será realizado no dia 15 de Dezembro de 2025. Não perca essa oportunidade de dar um passo importante na sua educação! </p>

    <h2> Formulário de inscrição </h2>

    <form>

    <label> Nome completo </label>
    <input type='text' id='Nome'/> 

    <label> CPF </label>
    <input type='text' id='CPF'/>

    <label> E-Mail </label>
    <input type='email' id='Email'/>

     <label> Data de nascimento </label>
     <input type='date' id='Nascimento'/>

     <label> Endereço </label>
     <input type='text' id='Endereco'/>

     <label> Telefone </label>
     <input type='text' id='Telefone'/>

     <label> Curso desejado </label>
     <input type='range' id='Curso'/>

    </form>

    <p> A taxa de inscrição para o vestibular é de R$50,00. O pagamento pode ser realizado via cartão de crédito, boleto ou pix. Os candidatos que se inscreverem até dia 15 de Novembro terão um desconto de 20% na taxa de inscrição. </p>
    <p> Oferecemos diversas bolsas de estudo para alunos que enfrentam dificuldades financeiras. As bolsas podem chegam até 55% da mensalidade.  Para se qualificar, os candidatos devem apresentar comprovante de renda familiar e preencher um formulário específico durante o processo de inscrição. </p>

   </section>

    <FaqI/>

    </main>

    <Footer/>
</div>

  );
}

export default Inscricao;