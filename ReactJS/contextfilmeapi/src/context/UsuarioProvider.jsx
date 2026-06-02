import { useContext, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

// disponibiliza o state do usuário de forma global para
// todos os seus componentes filhos (children)
export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState("Maria Eduarda")
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