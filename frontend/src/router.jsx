import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './pages/landingPage';
import Graduacao from "./pages/graduacao";
import PosGraduacao from "./pages/pos-graduacao";
import Tecnico from "./pages/tecnico";
import Livre from "./pages/livre";
import Inscricao from "./pages/inscricao";
import Bolsa from "./pages/bolsas";
import InscricaoBolsa from "./pages/bolsas/inscricao";

export default function Navegacao(){
    return(

       <BrowserRouter>
       
       <Routes>
       <Route path='/' element={<LandingPage/>}></Route>
       <Route path='/graduação' element={<Graduacao/>}></Route>
       <Route path='/pós-graduação' element={<PosGraduacao/>}></Route>
       <Route path='/técnico' element={<Tecnico/>}></Route>
       <Route path='/livre' element={<Livre/>}></Route>
       <Route path='/inscricao' element={<Inscricao/>}></Route>
       <Route path='/bolsa' element={<Bolsa/>}></Route>
       <Route path='/inscricaoBolsa' element={<InscricaoBolsa/>}></Route>
       

       </Routes>

       </BrowserRouter>
    )
}