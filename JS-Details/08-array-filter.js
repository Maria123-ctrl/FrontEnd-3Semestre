const numeros = [5, 10, 14, 50, 15, 10, 900, 100, 10];

const numeroEncontrado = numeros.filter((n) =>{
    return n == 10;
});

const nomes =[
    "Walyson",
    "Davi",
    "Edu",
    "Laura",
    "Lívia",
    "Amy",
    "Paulo",
    "James",
    "Marcos",
    "Nathan",
    "Felipe",
    "Gabriel",
    "Gabriele",
    "Stephani",
    "Fontes",
];

// pessoasLegais = nomes.filter((nome) =>{
//     return nome.length <= 3 || nome.length == 6;
// });
// console.log(pessoasLegais);

pessoasLetraN = nomes.filter((nome) =>{

    const primeiraLetra = nome.substring(0,1);
    return primeiraLetra == "N" || primeiraLetra == "L";
});
console.log(pessoasLetraN);

// console.log(numeroEncontrado);
