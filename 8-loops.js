console.log(` \n Trabalhando com Listas`);

const listaDeDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`,
    `Maldivas`,
    `Egito`
);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log(" \n Destinos Possiveis");
console.log(listaDeDestinos);
// if (idadeComprador >= 18 || estaAcompanhado == true) {
//     console.log("Boa Viagem")
//     listaDeDestinos.splice(2, 1);//removendo item
//     temPassagemComprada = true;
// }else{
//     console.log("Não  é maior de Idade e não posso vender");
//     temPassagemComprada = false;
// }

// console.log("Embarque: \n \n ")
// if(idadeComprador >= 18 && temPassagemComprada){
//     console.log("Boa Viagem");
// }else {
//     console.log("Você não pode embarcar")
// }
const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
while(contador <3){
    if(listaDeDestinos[contador] == destino){    
    destinoExiste = true;
    break;
    }
    contador += 1;
}
console.log("Destino existe : ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont = 0; cont < 3; cont++){
    if(listaDeDestinos[contador] == destino){    
    destinoExiste = true;
   
    }
    
}