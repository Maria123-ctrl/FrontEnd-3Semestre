async function calcular() {
    // Pegar os valores dos campos
    //nome
    //altura
    // peso 
    // exibir no console

    let nome = document.getElementById("nome").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let situacao = gerarSituacao();
    console.log(altura);
    console.log(peso);
    //  if(imc < 18.5){
    //       situacao = "Abaixo do peso";
    //  }
    //  else if(imc >= 18.5 && imc < 25){
    //      situacao = "Peso normal";
    //  }
    //  else if(imc >= 25 && imc < 30){
    //      situacao = "Sobrepeso";
    //  }else if(imc >= 30){
    //      situacao = "Obesidade";
    //  }
    if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("preencher todos os campos");
        return false;
    }
    // } else {
    //     alert(situacao);
    // }
    console.log("Liberado para cadastrar");
    // calcular o imc
    const IMC = calcularIMC(peso, altura).toFixed(2);
    console.log(IMC);
    // gerar o texto da situação
    const textoSituacao = gerarSituacao(IMC);
    // gerar um Objeto JS com os dados
    const objIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        IMC: IMC,
        situacao: textoSituacao
    }

    // cadastrar na API
    const dadosGravados = await cadastrarNaAPI(objIMC);
    console.log(dadosGravados);

    if ("error" in dadosGravados) {
        alert(dadosGravados.error)
    } else {

        // Mostrar no html (inserir a linha da tabela)
        carregarCadastros();
    }

} // fim da função calcular


function carregarCadastros() {
    buscarDados();
}




async function cadastrarNaAPI(objCadastro) {
    // fazer um post na api

    try {
        const retorno = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        const dadosGravados = await retorno.json();
        return await dadosGravados;
    } catch (error) {
        console.log(error);
        return await { error: "Problemas para gravar API" };
    }
}
function mostrarNaTela(objCadastro) {
    document.getElementById("cadastro").innerHTML += `<tr>
                                                        <td>${objCadastro.nome}</td>
                                                        <td>${objCadastro.altura}</td>
                                                        <td>${objCadastro.peso}</td>
                                                        <td>${objCadastro.IMC}</td>
                                                        <td>${objCadastro.situacao}</td>
                                                    </tr>`;
}






function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Menor que 16 – Magreza grave;

// 16 a menor que 17 – Magreza moderada;

// 17 a menor que 18,5 – Magreza leve;

// 18,5 a menor que 25 – Saudável;

// 25 a menor que 30 – Sobrepeso;

// 30 a menor que 35 – Obesidade Grau I;

// 35 a menor que 40 – Obesidade Grau II (considerada severa);

// Maior que 40 – Obesidade Grau III (considerada mórbida).
// A função deverá retornar o texto da situação baseada no IMC

function gerarSituacao(IMC) {
    if (IMC < 16) {
        return ("Magreza grave");
    } else
        if (IMC >= 16 && IMC < 17) {
            return ("Magreza moderada");
        } else
            if (IMC >= 17 && IMC < 18.5) {
                return ("Magreza leve");
            } else
                if (IMC >= 18.5 && IMC < 25) {
                    return ("Saudável");
                } else
                    if (IMC >= 25 && IMC < 30) {
                        return ("Sobrepeso");
                    } else
                        if (IMC >= 30 && IMC < 35) {
                            return ("Obesidade Grau I");
                        } else
                            if (IMC >= 35 && IMC < 40) {
                                return ("Obesidade Grau II");
                            } else {
                                return ("Obesidade Grau III");
                            }

}

async function buscarDados(){
        try{
        const retornaDados = await fetch("http://localhost:3000/imc");
        const dados = await retornaDados.json();

       dados.sort((a, b) => 
        a.nome.localeCompare(b.nome)
       );

        document.getElementById("cadastro").innerHTML = "";

        dados.forEach(item => {
            mostrarNaTela(item);
        });

        } catch (erro){
            console.log("Erro ao buscar:", erro)
        }

}