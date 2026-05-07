let frutasVermelhas = [];

frutasVermelhas.push("Morango");
frutasVermelhas.push("Maça");
frutasVermelhas.push("Franboesa");
frutasVermelhas.push("Tomate");
frutasVermelhas.push("Cereja");


console.log(frutasVermelhas);

let PfrutaRemovida = frutasVermelhas.shift();//remove o primeiro item da cesta
console.log(`${frutaRemovida} foi removida da cesta!`);
console.log(frutasVermelhas);