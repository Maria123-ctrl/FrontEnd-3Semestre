import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/cadastroGenero"
import PrivateRoutes from "./PrivateRoutes"


const Rotas = () => {
       return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={
                    <PrivateRoutes>
                        <CadastroFilme />
                    </PrivateRoutes>} path="/filmes" />
                <Route element={
                    <PrivateRoutes>
                        <CadastroGenero/>
                    </PrivateRoutes>} path="/generos" />
            </Routes>
        </BrowserRouter >
    )
}
 export default Rotas