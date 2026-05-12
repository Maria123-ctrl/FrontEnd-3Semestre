import { useState } from "react";
import "./cadfruta.css"
function CadFruta() {


    const [fruta, setFruta] = useState("") // cria um state string vazia
    const [quantidade, setQuantidade] = useState("")
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi", quantidade: setQuantidade },
        { id: 2, nome: "Melão", quantidade: 20 }
    ])//cria um state array vazio

    function Cadastrar(e) {
        e.preventDefault();//evita o submit do formulário
        alert("Função Cadastrar OK!")
        setArrFrutas([
                                ...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }
                            ]);

        limparFormulario()
        return false;
    }

    // Limpa os states
    function limparFormulario() {
        setArrFrutas("")
        setQuantidade(0)
    }

    return (

        <section className="sessao-cadastro">
            <h1>Cadastro</h1>
            <form action="" method="post" onSubmit={Cadastrar}>
                <fieldset className="cadastro">
                    <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da Fruta</label>
                    <input type="text" id="fruta" className="cadastro__entrada" placeholder="Digite o nome da fruta" onChange={(e) => {
                        setFruta(e.target.value);
                    }} />
                    <label htmlFor="Numero" className="cadastro__rotulo">Digite a quantidade da Fruta</label>
                    <input type="text" id="Numero" className="cadastro__entrada" placeholder="Digite a quantidade da Fruta" onChange={(e) => {
                        setQuantidade(parseInt(e.target.value));
                    }} />
                    <button type="submit" className="cadastro__btn-cadastrar">Cadastrar</button>
                    <br />
                    <label htmlFor="">{fruta}</label>
                </fieldset>
            </form>

            <ul className="listagem">
                {
                    arrFrutas.map((f) => {
                        return (
                            <li key={f.id}>
                                Fruta: {f.nome} | Quantidade: {f.quantidade}
                            </li>
                        )
                    })
                }
            </ul>
        </section>

    )

}

export default CadFruta;

