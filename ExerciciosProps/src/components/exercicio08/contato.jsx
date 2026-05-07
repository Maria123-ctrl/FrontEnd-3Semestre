const Contato = ({nome, telefone, email}) => {
    return (
        <div>
        <h1>Nome: {nome}</h1>
        <p>Telefone: {telefone}</p>
        <p>Imagem: {email} </p>
        </div>
    );
}

export default Contato;