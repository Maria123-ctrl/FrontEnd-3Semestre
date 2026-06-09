import { useEffect, useState } from "react";
import { SenhaContext } from "./SenhaContext";


export const SenhaProvider = ({children}) => {
    const [senha, setSenha] = useState(JSON.parse(localStorage.getItem("senha")) || null);
    useEffect(() => {
        setSenha(JSON.parse(localStorage.getItem("senha")));
    }, []);
    return (
        <SenhaContext.Provider
            value={{
                senha,
                setSenha
            }}
        >
            {children}
        </SenhaContext.Provider>
    )


}

export default SenhaProvider;