import { useEffect, useState } from "react"
import "./produtospage.css"
import fotoProduto from "/images/herocopy.png"
import axios from "axios"
import api from "../../Services/services"

export const ProdutosPage = () => {
    const [listaProdutos, setListaProdutos] = useState([])

    // states - campos do formulário
    const [id, setId] = useState(0)
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState(0)
    const [imagem, setImagem] = useState("herocopy.png")
    const [editar, setEditar] = useState(false)

    
    useEffect(() => {
        const getDados = async () => { 
        try {
            const retornoAPI = await api.get("/produtos")
            // const retornoAPI = await fetch("http://localhost:3000/produtos");
            const dados = await retornoAPI.data()
            setListaProdutos(dados);
            
        } catch (error) {
            console.log(error);
        }
        }

        getDados()

    }, [])
    

    const cadastrarProduto = async (e) => {
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
        // console.log(objProduto);
        const retornoAPI = await axios.post ("http://localhost:3000/produtos", objProduto)
        const produtoCadastrado = await retornoAPI.data;
        console.log(produtoCadastrado);
        setListaProdutos([...listaProdutos, produtoCadastrado])

        limparFormulario()
    }

    function limparFormulario() {
        setId(0)
        setTitulo("")
        setDescricao("")
        setPreco(0)
    }
    const deletar = async (id) => {
        if(!confirm("Você realmente quer apagar o produto?"))
            return false
        
         try {
                // await fetch(`http://localhost:3000/produtos/${id}`, {
                //     method: "DELETE"
                // })
                // gera a lista de produtos que não foram apagados
                const retornoAPI = await api.delete(`http://localhost:3000/produtos/${id}`)
                const novaLista = listaProdutos.filter((prod) => {
                    return prod.id != id;
                })
            

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

    const editarProduto = async (e) => {
        e.preventDefault()
        // validar formulário
        // criar o objeto Cadastro
        // chamar o fetch com verbo PUT
        // chamar a função getDados()
        const objProduto = {
            titulo: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        }
        try {
            const retornoAPI = await api.put(`http://localhost:3000/produtos/${id}` , objProduto);

            console.log(retornoAPI);
            const produtoEditado = await retornoAPI.data;
            // if(retornoAPI.status == 200) {
            //     getDados()
            //     limparFormulario()
            //     setEditar(false)
            // }else {
            //     alert("Erro ao recarregar os dados")
            // }
            const novaLista = listaProdutos.map(p => p.id === id ? produtoEditado : p)
            setListaProdutos(novaLista)

            setEditar(false)

            limparFormulario()

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="page">
            <form action="" onSubmit={editar ? editarProduto : cadastrarProduto} className="produto" >
                <h1 className="form__title">Cadastro De Produtos</h1 >
                <input className="input-form" type="text" id="nome" value={titulo} onChange={(e) => {
                    setTitulo(e.target.value)
                }} placeholder="Nome do produto" />
                <input className="input-form" type="number" id="preco" value={preco} onChange={(e) => {
                    setPreco(parseFloat(e.target.value))
                }} placeholder="Preço" />
                <input className="input-form" type="text" id="descricao" value={descricao} onChange={(e) => {
                    setDescricao(e.target.value)
                }} placeholder="Descrição" />

                {editar && (<button 
                className="cadastro__button" onClick={() => {
                    setEditar(false)
                    limparFormulario()
                }}>Cancelar</button>)}
                
                <button className="cadastro__button" >Salvar</button>

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

                                <a href="" onClick={(e)=>{
                                    e.preventDefault();
                                    
                                    setEditar(true)
                                    setId(p.id)
                                    setTitulo(p.titulo)
                                    setDescricao(p.descricao)
                                    setPreco(p.preco)
                                }}>Editar</a>
                            </article>
                        )
                    })
                }


            </section>
        </div >

    )
}
