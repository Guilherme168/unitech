import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './pages/landingPage';
import Graduacao from "./pages/graduacao";
import PosGraduacao from "./pages/pos-graduacao";
import Tecnico from "./pages/tecnico";
import Livre from "./pages/livre";

export default function Navegacao(){
    return(

       <BrowserRouter>
       
       <Routes>
       <Route path='/' element={<LandingPage/>}></Route>
       <Route path='/graduação' element={<Graduacao/>}></Route>
       <Route path='/pós-graduação' element={<PosGraduacao/>}></Route>
       <Route path='/técnico' element={<Tecnico/>}></Route>
       <Route path='/livre' element={<Livre/>}></Route>


       </Routes>

       </BrowserRouter>
    )
}