import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

// PrivateRoutes.jsx
const PrivateRoutes = ({ children }) => {
    const { usuario } = useContext(UsuarioContext);
    
    // Redireciona para /login em vez de /
    // O 'replace' serve para não estragar o histórico do botão "Voltar" do navegador
    return usuario ? children : <Navigate to="/" replace />
}
export default PrivateRoutes