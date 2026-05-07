import "./produto.css"

const Produto = ({nome, preco, descricao}) => {
    return (
        <p>Olá, o seu produto é um {nome}, seu preço é de {preco} e ele é {descricao}</p>
    )
}

export default Produto;