import { Navigate } from "react-router-dom"
import { UsuarioContext } from "../context/UsuarioContext"
import { useContext } from "react"

const PrivateRoute = ({children}) => {
    const {usuario} = useContext(UsuarioContext)

    return usuario ? children : <Navigate to="/">
        
    </Navigate>
        
    
}

export default PrivateRoute