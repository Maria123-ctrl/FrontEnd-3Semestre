import { useEffect, useState } from "react"
import "./produtospage.css"
import fotoProduto from "/images/herocopy.png"

export const ProdutosPage = () => {
    const [listaProdutos, setListaProdutos] = useState([])

    // states - campos do formulário
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState(0)
    const [imagem, setImagem] = useState("herocopy.png")

    useEffect(() => {
        const getDados = async () => { 
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos");
            const dados = await retornoAPI.json()
            setListaProdutos(dados);
            
        } catch (error) {
            console.log(error);
        }
        }

        getDados()

    }, [])
    

    const cadastrar = async (e) => {
        e.preventDefault()
        // validar os dados
        if ( titulo.trim().length == 0 ||  descricao.trim().length == 0 || isNaN(preco)
        ){
            alert("Preencha todos os campos corretamente");
            return false;
        }
        const objProduto = {
            titulo: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        }
        console.log(objProduto);
        const retornoAPI = fetch ("http://localhost:3000/produtos", {
            method: "POST",
            body: JSON.stringify(objProduto),
            headers: {
                "Content-Type" : "application/json; charset=UTF-8" 
            }
        })
        const produtoCadastrado = await retornoAPI.json()
        console.log(produtoCadastrado);
        setListaProdutos([...listaProdutos, produtoCadastrado])
    }

    const deletar = async (id) => {
         try {
                await fetch(`http://localhost:3000/produtos/${id}`, {
                    method: "DELETE"
                })
                // gera a lista de produtos que não foram apagados
                const novaLista = listaProdutos.filter(p => p.id !== id)
                setListaProdutos(novaLista)

                if(retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
                    alert("Produto apagado com sucesso!");
                    setListaProdutos(novaLista);
                }else {
                    alert("Erro ao cadastrar o produto");
                }
            } catch (error) {
                console.log(error)
            }
            
    }


    return (
        <div className="page">
            <form action="" onSubmit={cadastrar} className="produto" >
                <h1 className="form__title">Cadastro De Produtos</h1 >
                <input className="input-form" type="text" id="nome" onChange={(e) => {
                    setTitulo(e.target.value)
                }} placeholder="Nome do produto" />
                <input className="input-form" type="number" id="preco" onChange={(e) => {
                    setPreco(parseFloat(e.target.value))
                }} placeholder="Preço" />
                <input className="input-form" type="text" id="descricao" onChange={(e) => {
                    setDescricao(e.target.value)
                }} placeholder="Descrição" />


                <button className="cadastro__button" onclick="cadastrar()">Cadastrar</button>

            </form>

            <section className="data" id="cadastro">
                {
                    listaProdutos.map((p) => {
                        return (
                            <article key={p.id} className="data__card">
                                <span><h4>Nome do produto: {p.titulo}</h4> </span>
                                <span><h4>Preço: </h4>{p.preco} </span>
                                <span><h4>Descrição: </h4>{p.descricao} </span>
                                <span><h4>imagem: </h4><img className="img" src={fotoProduto} /> </span>
                                <a href="" onClick={(e)=>{
                                    e.preventDefault()
                                    deletar(p.id)
                                }}>Apagar</a>
                            </article>
                        )
                    })
                }


            </section>
        </div >

    )
}
