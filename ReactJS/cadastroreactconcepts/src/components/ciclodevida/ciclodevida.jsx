import { useEffect, useState } from "react"
import contador from "../contador/contador"
import "./ciclodevida.css"


export default function CicloDeVida() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        // quando o componente é montado
        console.log("Componente MONTADO");
        return () =>{
            console.log("Componente DESMONTADO");
        }

    }, [])

    useEffect(() => {
        console.log("coponente ATUALIZADO");
        console.log("Valor do contador ${contador}")
    }, [contador])

    return (
        <> 
        <h1>Contador: {contador}</h1>
        <button onClick={() => {
            setContador(contador + 1);
        }}>Contar</button>
        </>
    )
}