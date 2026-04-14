function validarFormulario() {
    let quantidadeErros = 0;
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("nome").value;
    let Email = document.getElementById("nome").value;
    let nEstado = document.getElementById("nome").value;
    let DDD = document.getElementById("nome").value;
    

    if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    }else{
        reiniciarBorda("nome");
    }
    if(sobrenome.trim().length == 0){
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    }else{
        reiniciarBorda("sobrenome");
    }
    if(Email.trim().length == 0){
        formError("Email");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    }else{
        reiniciarBorda("Email");
    }
    if(nEstado.trim().length == 0){
        formError("nEstado");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    }else{
        reiniciarBorda("nEstado");
    }
    if(DDD.trim().length == 0){
        formError("DDD");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    }else{
        reiniciarBorda("DDD");
    }

    if(quantidadeErros > 0){
        alert("Existem" + quantidadeErros + "erros no formulário");
        quantidadeErros = 0;
    }else{
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciarBorda(idCampo){
    document.getElementById(idCampo).style.border = "transparent";
}

