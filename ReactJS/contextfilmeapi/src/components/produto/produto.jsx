import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { ProdutoContext } from "../../context/ProdutoContext"
import CadastroProduto from "../cadastroproduto/CadastroProduto"
import ListaProduto from "../listarproduto/ListarProduto"

const Produto = () => {
    const {produtos} = useContext(ProdutoContext)
    const {usuario} = useContext(UsuarioContext)
    return (
        <>
        <h2>Página de Produtos</h2>
        <p>Bem vindo, ({usuario})</p>
        <CadastroProduto />
        <ListaProduto />
        </>
    )
}

export default Produto