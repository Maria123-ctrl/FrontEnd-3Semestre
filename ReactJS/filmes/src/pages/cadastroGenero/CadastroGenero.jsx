import "./cadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Lista from "../../components/lista/Lista"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../services/services"

const CadastroGenero = () => {

    // states e variáveis
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])

    // ciclo de vida e funções

    const cadastrarGenero =  async (e) => {
        e.preventDefault();
        if(valor.trim().length == 0) 
        {
            alert("Gênero dever ser preenchido antes de cadastrar!")
            return false;
        }

        const objCadastro = {
            Nome: valor
        }

        try {
            // Cadastra na api, no endpoint do swagger
            const retornarAPI = await api.post("/Genero", objCadastro)
            getGeneros()
            if(retornarAPI.status == 201){
                alert("Gênero cadastrado com sucesso!")
                limparFormulario()
            } else {
                alert("Houve algum problema ao cadastrar!")
            }
        } catch (error) {
            alert("Ocorreu um erro ao cadastrar o gênero!")
            console.log(error)
        }
        return false;
    }

    const limparFormulario = () => {
        setValor("");
    }



    const editarGenero = () => {
        alert("Função Excluir Gênero em desenvolvimento")
    }

    const excluirGenero = async (item) => {
        try {
            console.log(item);
            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
            console.log(retornoAPI)
        } catch (error) {
            
            alert("Função Excluir Gênero em desenvolvimento")
        }
    }

    useEffect( () => {
        // chamar os dados da api
        getGeneros()
    },)

    const getGeneros = async () => {

        try {
            const retornoAPI = await api.get("/Genero")// chama a api
            const dados = retornoAPI.data// extrai os dados retornados
            setListaGeneros(dados)// guarda os dados no state (já exibe na lista)
            
        } catch (error) {
            alert("Erro ao retornar os dados")
        }
    }

    // 0 js
    return (
        <> 
        <Header />
        <main>
        <Cadastro 
            tituloCadastro="Cadastro de Gêneros"
            visibilidade="none"
            placeholder="gênero"
            valor={valor}
            // dunção que muda o state
            setValor={setValor}
            funcCadastro={editar ? editarGenero : cadastrarGenero}
            />

            <Lista 
            tituloLista="Lista de Gêneros"
            visibilidade="none"
            tipoLista="gênero"
            lista={listaGeneros}
            // dunção que muda o state
            funcExcluir={excluirGenero}
            funcEditar={editarGenero}
            />
        </main>
        <Footer />
        </>
    )
}

export default CadastroGenero
