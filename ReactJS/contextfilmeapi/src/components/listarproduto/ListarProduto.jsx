import { useContext } from "react";
import '../produto/produto.css'
import { ProdutoContext } from "../../context/ProdutoContext";

const ListaProduto = () => {
  const { produtos } = useContext(ProdutoContext);
  return (
    <div className="lista-produtos">
  <h2>Lista de Produtos</h2>

  <ul>
    {produtos.map((produto,index)=>(
      <li key={index}>
        <div className="nome-produto">
          {produto.nome}
        </div>

        <div className="descricao-produto">
          {produto.descricao}
        </div>
      </li>
    ))}
  </ul>
</div>
  );
}

export default ListaProduto;