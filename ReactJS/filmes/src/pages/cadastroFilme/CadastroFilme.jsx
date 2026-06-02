import "./CadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Lista from "../../components/lista/Lista"
import Cadastro from "../../components/cadastro/Cadastro"
import { Alerta } from "../../components/alerta/Alerta"
import { useEffect, useState } from "react"
import api from "../../services/services"

const CadastroFilme = () => {
    const [listaGeneros, setListaGeneros] = useState([
    ])

    const [valor, setValor] = useState("");
    const [img, setImg] = useState("")
    const [listaFilmes, setListaFilmes] = useState([]);
    const [valorSelect, setValorSelect] = useState("");
    const [editar, setEditar] = useState(false);
    const [idEditar, setIdEditar] = useState(null);

    // ciclo de vida e funções

    const cadastrarFilme = async (e) => {
        e.preventDefault();
        if(valor.trim().length == 0) 
        {

            Alerta({
                title: "Cadastro de Filme",
                text : "Filme deve ser preenchido antes de cadastrar!",
                icon: "error"
            })

            return false;
        }

        const formData = new FormData();
        formData.append("Nome", valor);
        formData.append("IdGenero", valorSelect);
        formData.append("Imagem", img);


        try {
            if(valorSelect.trim().length === 0){
              Alerta({
                title: "Tem que colocar a PORRA do gênero",
                text: "gênero",
                icon: "error",
                confirmButtonText: "Ok"
              })
              return;
            }
            // Cadastra na api, no endpoint do swagger
            const retornarAPI = await api.post("/Filme", formData)
            getFilmes()
            if(retornarAPI.status == 201){
                 Alerta({
                title: "Cadastro de Filme",
                text : "Filme Cadastrado com Sucesso",
                icon: "success",
                confirmButtonText: "Ok"
            })
                limparFormulario()
                getFilmes()
            } else {
                alert("Houve algum problema ao cadastrar!")
            }
        } catch (error) {
             Alerta({
                title: "Cadastro de Filme",
                text : "Erro na chamada da API",
                icon: "error"
            })
            
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);
            // alert("Ocorreu um erro ao cadastrar o gênero!")
            // console.log(retornoAlerta);
        }
        return false;
    }

    const editarFilme = async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("Nome", valor);
            formData.append("IdGenero", valorSelect);
            formData.append("Imagem", img)
            await api.put(`/Filme/${idEditar}`, formData);

            limparFormulario();
            getFilmes();

            Alerta({
                title: "Sucesso!",
                text: "Filme atualizado com sucesso!",
                icon: "success",
                confirmButtonText: "Ok",
            });

        } catch (error) {

            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);

            Alerta({
                title: "Erro na chamada da API",
                text: "Verifique os dados e tente novamente!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    // Excluir Filme
    const excluirFilme = async (item) => {

        const result = await Alerta({
            title: "Excluir Filme",
            text: `Tem certeza que deseja excluir o filme ${item.titulo}?`,
            icon: "warning",
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        });

        if (!result.isConfirmed) return;

        try {

            await api.delete(`/Filme/${item.idFilme}`);

            getFilmes();
            limparFormulario();

            Alerta({
                title: "Excluído!",
                text: `O filme ${item.titulo} foi excluído com sucesso!`,
                icon: "success",
                confirmButtonText: "Ok",
            });

        } catch (error) {

            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);

            Alerta({
                title: "Erro",
                text: "Erro ao excluir filme!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };
    const limparFormulario = () => {
        setValor("");
        setValorSelect("");
        setImg(null);
        setEditar(false);
        setIdEditar(null);
    }

    const preEditar = (item) => {
        setValor(item.titulo);
        setValorSelect(item.idGenero);
        setIdEditar(item.idFilme);
        setEditar(true);
    }
    useEffect(()=>{
        getFilmes()
    }, [])
    const getFilmes = async () => {
        try{
            const retornoAPI = await api.get("/Filme")
            const dados = await retornoAPI.data
            setListaFilmes(dados)
        }catch (error) {
            Alerta({
                title: "Erro",
                text : "Ocorreu um erro ao retornar os dados da API",
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
    
    return (
        <> 

        < Header />
        <main>
        <Cadastro 
            tituloCadastro="Cadastro de Filme"
            visibilidade="true"
            placeholder="filme"
            valor={valor}
            // dunção que muda o state
           cancelarEdicao={limparFormulario}
            setValor={setValor}
            funcCadastro={editar ? editarFilme : cadastrarFilme}
            btnEditar={editar}
            listaGeneros= {listaGeneros}
            setImg={setImg}
            valorSelect= {valorSelect}
            setValorSelect= {setValorSelect}

            />

            <Lista 
            tituloLista="Lista de Filmes"
            // visibilidade="none"
            tipoLista="filme"
            lista={listaFilmes}
            // // dunção que muda o state
            setValor={setValor}
            valor={valor}
            funcExcluir={excluirFilme}
            funcEditar={preEditar}
            setEditar={setEditar}

            />
        </main>
        <Footer />
        </>
    )
}

export default CadastroFilme