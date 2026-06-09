import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import "./Perfil.css"

const Perfil = () => {
    // destructuring
    const {usuario, setUsuario} = useContext(UsuarioContext)
    // states e variáveis
    const [novoUsuario, setNovoUsuario] = useState()

    // ciclo de vida e funções
    // guarda o usuário no localStorage no formato JSON
    const login = () => {
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))
        setUsuario(novoUsuario)
        setNovoUsuario("")
    }
    // jsx
    return (
        <div className="perfil-container">

        <h2>Página de Perfil ({usuario})</h2>

        <input type="text" 
        placeholder="digite o novo usuário"
        value={novoUsuario}
        onChange={(e) =>{
            setNovoUsuario(e.target.value)
        }}
        />

        <button
            onClick={() => {
                login()
            }}
        >Entrar</button>
        <p>Novo Usuário: <strong>{novoUsuario}</strong></p>
        </div>
    )
}

export default Perfil;