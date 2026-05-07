const Jogo = ({nome, plataforma, preco, imagem}) => {
    return (
        <>
        <div className="Jogo">
            <img src={imagem} className="Foto" />
            <h2>{nome}</h2>
            <p>Plataforma: {plataforma}</p>
            <p>Preço: R$ {preco.toFixed(2)}</p>
        </div>
        </>
    )
}

export default Jogo;