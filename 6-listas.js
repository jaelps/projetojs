console.log("Trabalhado com listas");

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //adicionado item
console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//contagem de lisa se inicia de 0;
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);