/* Esta função recebe os dados do formulário em um objeto
JavaScript e em seguida chama a api para cadastrar
*/
async function cadastrarContato(objetoContato) {


    console.log(objetoContato);

    // chamar a api com o fetch
    const resposta = await fetch("http://localhost:3000/contatos", {
        method : "POST",
        body: JSON.stringify(objetoContato), //converte o objeto JavaScript em JSON

        headers: {//informa para a api que o body está sendo enviado no formato json
            "Content-Type": "application/json; charset=UTF-8",
        },
    });

    return await resposta;
}




async function buscarEndereco(CEP) {

    // quando o cep não vier preenchido
    if (CEP.trim().length < 8) {
        alert("O CEP deve ter 8 dígitos");
        return false;
    }

    // buscar o CEP lá na ViaCEP
    try {
        aguardandoCampos();

        let retorno = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
        let dados = await retorno.json();
        //  setTimeout(() => {
        // })

        // console.log(dados);// obejeto dados
        // console.log(dados.logradouro);// nome da rua
        // console.log(dados.bairro);// bairro
        // console.log(dados.localidade);// bairro
        // console.log(dados.estado);// bairro
        // console.log(dados);


        document.getElementById("RuaCasa").value = dados.logradouro;
        document.getElementById("Bairro").value = dados.bairro;
        document.getElementById("Cidade").value = dados.localidade;
        document.getElementById("Estado").value = dados.estado;


    } catch (error) {
        console.log(error);
    }
}

function aguardandoCampos() {
    document.getElementById("RuaCasa").value = "aguarde ...";
    document.getElementById("Bairro").value = "aguarde ...";
    document.getElementById("Cidade").value = "aguarde ...";
    document.getElementById("Estado").value = "aguarde ...";
}














function validarFormulario() {
    let quantidadeErros = 0;
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let Email = document.getElementById("Email").value;
    let País = document.getElementById("País").value;
    let DDD = document.getElementById("DDD").value;
    let Telefone = document.getElementById("Telefone").value;
    let CEP = document.getElementById("CEP").value;
    let RuaCasa = document.getElementById("RuaCasa").value;
    let nCasa = document.getElementById("nCasa").value;
    let Complemento = document.getElementById("Complemento").value;
    let Bairro = document.getElementById("Bairro").value;
    let Cidade = document.getElementById("Cidade").value;
    let Estado = document.getElementById("Estado").value;
    let Anotações = document.getElementById("Anotações").value;


    if (nome.trim().length == 0) {
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    } else {
        reiniciarBorda("nome");
    }
    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    } else {
        reiniciarBorda("sobrenome");
    }
    // if (Email.trim().length == 0) {
    //     formError("Email");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("Email");
    // }
    // if (País.trim().length == 0) {
    //     formError("País");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("País");
    // }
    // if (DDD.trim().length == 0) {
    //     formError("DDD");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("DDD");
    // }
    // if (Telefone.trim().length == 0) {
    //     formError("Telefone");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("Telefone");
    // }
    // if (CEP.trim().length == 0) {
    //     formError("CEP");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("CEP");
    // }
    // if (RuaCasa.trim().length == 0) {
    //     formError("RuaCasa");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("RuaCasa");
    // }
    // if (nCasa.trim().length == 0) {
    //     formError("nCasa");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("nCasa");
    // }
    // if (Complemento.trim().length == 0) {
    //     formError("Complemento");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("Complemento");
    // }
    // if (Bairro.trim().length == 0) {
    //     formError("Bairro");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("Bairro");
    // }
    // if (Cidade.trim().length == 0) {
    //     formError("Cidade");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("Cidade");
    // }
    // if (Estado.trim().length == 0) {
    //     formError("Estado");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("Estado");
    // }
    // if (Anotações.trim().length == 0) {
    //     formError("Anotações");
    //     quantidadeErros++;
    //     // alert("O campo nome é obrigatório!");
    // } else {
    //     reiniciarBorda("Anotações");
    // }

    if (quantidadeErros > 0) {
        alert("Existem" + quantidadeErros + "erros no formulário");
        quantidadeErros = 0;
    } else {
        // gera um objeto no JavaScript com os dados do formulário
        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            Email: Email,
            País: País,
            DDD: DDD,
            Telefone: Telefone,
            CEP: CEP,
            RuaCasa: RuaCasa,
            nCasa: nCasa,
            Complemento: Complemento,
            Bairro: Bairro,
            Cidade: Cidade,
            Estado: Estado,
            Anotações: Anotações
        }

        let cadastrado = cadastrarContato(objetoContato);
        // alert("Formulário enviado com sucesso!");
        // reiniciaTodasAsBordas();
    }
}

function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciarBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent";
}

