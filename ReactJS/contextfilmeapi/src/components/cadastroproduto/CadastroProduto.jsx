import { useContext, useState } from "react";
import '../produto/produto.css'
import { ProdutoContext } from "../../context/ProdutoContext";
import ListaProduto from "../listarproduto/ListarProduto";

const CadastroProduto= () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const {produtos, setProdutos} = useContext(ProdutoContext)
 

  return (
    <div className="container-produto">
  <h2>Cadastro de Produto</h2>

  <div className="form-produto">
    <input
      type="text"
      placeholder="Nome do produto"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
    />

    <input
      type="text"
      placeholder="Descrição do produto"
      value={descricao}
      onChange={(e) => setDescricao(e.target.value)}
    />

    <p>Produto que será cadastrado: {nome}</p>

    <button onClick={(e)=>{
      e.preventDefault();
      setProdutos([...produtos,{nome,descricao}]);
    }}>
      Cadastrar
    </button>
  </div>
</div>
  );
}



  
export default CadastroProduto;