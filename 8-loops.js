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
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino confirmado")
    }else{
        console.log("Destino Inexistente")
    }
    contador += 1;
}