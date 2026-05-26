import "./cadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Lista from "../../components/lista/Lista"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../services/services"
// biblioteca de alertas
import Swal from 'sweetalert2';
// import Botao from "../../components/botao/Botao"//botão cancelar
import { Alerta } from "../../components/alerta/Alerta";
const CadastroGenero = () => {

    // states e variáveis
    const [valor, setValor] = useState("")
    const [idEditar, setIdEditar] = useState(0)

    const [ editar, setEditar] = useState(false)
    const [listaGeneros, setListaGeneros] = useState([])

    // ciclo de vida e funções

    const cadastrarGenero =  async (e) => {
        e.preventDefault();
        if(valor.trim().length == 0) 
        {
            // <Alerta 
            // title="Cadastro de Gênero"
            // text = "Gênero deve ser preenchido antes de cadastrar!"
            // icon="success"
            // />;

            Alerta({
                title: "Cadastro de Gênero",
                text : "Gênero deve ser preenchido antes de cadastrar!",
                icon: "error"
            })

           
            // Swal.fire("Gênero dever ser preenchido antes de cadastrar!")
            // alert("Gênero dever ser preenchido antes de cadastrar!")
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
                 Alerta({
                title: "Cadastro de Gênero",
                text : "Gênero Cadastrado com Sucesso",
                icon: "success"
            })
                // alert(`Gênero ${objCadastro.Nome} cadastrado com sucesso`)
                limparFormulario()
                getGeneros()
            } else {
                alert("Houve algum problema ao cadastrar!")
            }
        } catch (error) {
             Alerta({
                title: "Cadastro de Gênero",
                text : "Erro na chamada da API",
                icon: "error"
            })
            // alert("Ocorreu um erro ao cadastrar o gênero!")
            console.log(retornoAlerta);
        }
        return false;
    }

    const limparFormulario = () => {
        setValor("");
        setEditar(false);
        setIdEditar(null);
    }

    const preEditar = (item) => {
        // jogar os dados no formulário
        setIdEditar(item.idGenero)
        setValor(item.nome)
        setEditar(true)
        console.log(item);
    }

    const editarGenero = async (e) => {
        e.preventDefault();
        const objEditar = {
            idGenero : idEditar,
            Nome : valor
        }
        try {
            const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar)
            getGeneros();
            Alerta({
                title: "Atualização de Gênero",
                text : "Gênero Atualizado com Sucesso!",
                icon: "success"
            })
            console.log(retornoAlerta);
            limparFormulario();
        } catch (error) {
            console.log(error);
            Alerta({
                title: "Deu Bad",
                text: "fudeu",
                icon: "error"
            })
        }
    }

    const excluirGenero = async (item) => {
        const result = await Swal.fire({
            title: "Excluir Gênero",
            text: `Tem certeza que deseja excluir o gênero ${item.nome}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "red",
            confirmButtonText: "Sim",
            cancelButtonText: "Não"
        })
        if(!result.isConfirmed) return false;
        console.log(item);
        try {
            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
            if(retornoAPI.status == 204 || retornoAPI.status == 200) {

                console.log(retornoAPI)
                Swal.fire({
                title: "Excluir o Gênero",
                text : "Gênero Deletado com Sucesso!",
                icon: "success"
            })
                getGeneros();
            }
        } catch (error) {
            
            Swal.fire({
                title: "Excluir o Gênero",
                text : "Ocorreu um erro na hora de excluir o gênero",
                icon: "error"
            })
        }
    }

    useEffect( () => {
        // chamar os dados da api
        getGeneros()
    }, [])

    const getGeneros = async () => {

        try {
            const retornoAPI = await api.get("/Genero")// chama a api
            const dados = await retornoAPI.data// extrai os dados retornados
            setListaGeneros(dados)// guarda os dados no state (já exibe na lista)
            // console.log(retornoAPI.data);
            
        } catch (error) {
            Swal.fire({
                title: "Erro",
                text : "Ocorreu um erro ao retornar os dados da API",
                icon: "error"
            })
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
           cancelarEdicao={limparFormulario}
            setValor={setValor}
            funcCadastro={editar ? editarGenero : cadastrarGenero}
            btnEditar={editar}
            />

            <Lista 
            tituloLista="Lista de Gêneros"
            visibilidade="none"
            tipoLista="genero"
            lista={listaGeneros}
            // dunção que muda o state
            funcExcluir={excluirGenero}
            funcEditar={preEditar}
            />
        </main>
        <Footer />
        </>
    )
}

export default CadastroGenero
