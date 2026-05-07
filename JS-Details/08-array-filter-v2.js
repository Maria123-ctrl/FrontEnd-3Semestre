const produtos = [
    {
        descricao: "Camisa Polo",
        cor : "Verde",
        preco : 49.99,
        perfil : "M",
        quantidade : 10,
        promocao : false
    },
    {
        descricao: "Camisa Polo",
        cor : "Amarela",
        preco : 29.99,
        perfil : "F",
        quantidade : 15,
        promocao : true 
    },
    {
        descricao: "Camisa Polo",
        cor : "Azul",
        preco : 29.99,
        perfil : "M",
        quantidade : 100,
        promocao : true
    },
    {
        descricao: "Camisa Polo",
        cor : "Roxa",
        preco : 49.99,
        perfil : "F",
        quantidade : 5,
        promocao : false
    },

];

//Retornar todas as camisetas do perfil feminino: "F"
const camisaF = produtos.filter ((F) =>{
    return F.perfil == "F";
});
console.log(camisaF);

let qtdPromocao = 0;
const promo = produtos.filter ((P) =>{
    if (P.promocao == true) {
        qtdPromocao += P.quantidade;
    }
    return P.promocao == true;
});
console.log(`Quantidade de produtos em promoção: ${qtdPromocao}`);

console.log(promo);