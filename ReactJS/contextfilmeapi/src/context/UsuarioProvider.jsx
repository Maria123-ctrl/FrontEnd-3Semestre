import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

// disponibiliza o state do usuário de forma global para
// todos os seus componentes filhos (children)
export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null)

    // ciclo de vida
    useEffect(()=>{
        // ao montar
        const usuarioLogado = JSON.parse(localStorage.getItem("usuario"))
        setUsuario(usuarioLogado)
    }, [])
    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}