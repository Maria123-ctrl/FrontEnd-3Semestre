import { useState } from "react"
import "./contador.css"

const contador = () => {
    const [valor, setValor] = useState(0)

    function incremento() {
        if(valor < 10) {

            setValor(valor + 1)
        }else {
            setValor(0)
        }
    }

    function decremento() {
        if(valor <= 0)  {
            return alert("Valor não permitido")
        }

        setValor(valor - 1);
    }

    // criar uma função decremento()
    // toda vez que o contador chegar em 10 você reiniciar
    // o contador não pode fazer contagem negativa

    return (
        
        <>
        <p>Contagem: {valor}</p>
        <button onClick={ incremento
            // return setValor(valor + 1)
            }>++</button>

        <button onClick={ decremento
            // () => setValor(valor - 1)
            }>--</button>

        </>
    )
}

export default contador;