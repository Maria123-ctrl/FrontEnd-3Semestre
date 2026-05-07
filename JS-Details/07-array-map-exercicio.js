const numeros = [  
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134
];

console.log(`Array original: ${numeros}`);

// Rodar o map gerando um novo array com o dobro dos números do original
const novosNumeros = numeros.map((num) => {
    return num * 2;
});

console.log(`Array Modificado: `);
console.log();


// após, exiba os valores do array dobro no console utilizando o foreach
let textoResultado = "";
novosNumeros.forEach((num) => {
    textoResultado += `${num} | `;//acumula texto em uma string (sem pular linha)
    // console.log(num);
});

// remover o último pipe
// console.log(textoResultado);
textoResultado = textoResultado.substring(0, textoResultado.length -3);
console.log(textoResultado);

