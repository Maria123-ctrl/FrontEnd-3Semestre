const Filme = ({titulo, ano, genero, nota}) => {
    return (
        <div>
        <h1>Título: {titulo}</h1>
        <p>Ano: {ano}</p>
        <p>Genêro: {genero}</p>
        <p>Nota: {nota}</p>
        </div>
    );
}

export default Filme;