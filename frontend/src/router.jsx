import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './pages/landingPage';

export default function Navegacao(){
    return(

       <BrowserRouter>
       
       <Routes>
       <Route path= "./" element = {<LandingPage/>}> </Route>
       </Routes>

       </BrowserRouter>
    )
}