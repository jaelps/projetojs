console.log("\n Trabalhado com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = false;
const destino = "Salvador"

console.log("\n Destinos possíveis");

console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino confirmado")
        destinoExiste = true;
        break;
    }

    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont = 0 ; contador<3 ; cont ++){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino confirmado")
        destinoExiste = true;
        //break;
    }
}