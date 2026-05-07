import "./perfil.css"

const Perfil = ({nome, idade, profissao}) => {
    return (
        <div className="card-perfil">
        <p>Olá, {nome}, sua idade é {idade} e sua profissao é {profissao}</p>
        </div>
    )
}

export default Perfil;