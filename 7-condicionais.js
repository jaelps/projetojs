console.log("Trabalhado com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 14; 
const estaAcompanhada = true;
console.log("Destinos possíveis");

console.log(listaDeDestinos);

//condição
if (idadeComprador >= 18){

    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);//removendo item
}else{
    //acompanhado pode viajar
    if(estaAcompanhada){
        console.log("Comprador esta acompanhado");
        listaDeDestinos.splice(1,1);
    }else{
        console.log("Menor idade não altorizado venda");
    }
    //console.log("Menor idade não altorizado venda")
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);