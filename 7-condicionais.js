console.log("Trabalhado com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log("Destinos possíveis");

console.log(listaDeDestinos);

//condição
// if (idadeComprador >= 18){

//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1);//removendo item
// }else if(estaAcompanhada){
//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(1,1);
//     }else{
//         console.log("Menor idade não altorizado venda");
//     }


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem");
    listaDeDestinos.splice(2, 1);//removendo item
} else {
    console.log("Menor idade não altorizado venda");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);