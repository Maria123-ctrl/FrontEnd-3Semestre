const Aluno = ({nome,curso,imagem}) => {
    return (
        <div>
        <h1>Nome: {nome}</h1>
        <p>Curso: {curso}</p>
        <p>Imagem:<img src={imagem}/> </p>
        </div>
    );
}

export default Aluno;