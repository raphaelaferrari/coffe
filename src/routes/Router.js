import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Cardapio from "../pages/Cardapio/Cardapio"
import Info from "../pages/Info/Info"
import Contato from "../pages/Contato/Contato"

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={"/cardapio"} element={<Cardapio/>}/>
                <Route path={"/quem-somos"} element={<Info/>}/>
                <Route path={"/contato"} element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router