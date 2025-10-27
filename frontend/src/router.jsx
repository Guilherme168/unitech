import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './pages/landingPage';
import Graduacao from "./pages/graduacao";

export default function Navegacao(){
    return(

       <BrowserRouter>
       
       <Routes>
       <Route path='/' element={<Graduacao/>}></Route>
       </Routes>

       </BrowserRouter>
    )
}