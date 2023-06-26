console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`,
    `Maldivas`,
    `Egito`
);

const idadeComprador = 18;
const estaAcompanhado = false;
const temPassagemComprada = true;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de Idade")
//     listaDeDestinos.splice(1, 1);//removendo item
// } else if (estaAcompanhado == true) {
//     console.log("Comprador Está Acompanhado")
//     listaDeDestinos.splice(1, 1);//removendo item
// } else {
//     console.log("Não é maior de Idade não posso vender")

// }

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa Viagem")
    listaDeDestinos.splice(2, 1);//removendo item
}else{
    console.log("Não  é maior de Idade e não posso vender");
}

console.log("Embarque: \n \n ")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem");
}else {
    console.log("Você não pode embarcar")
}


console.log(listaDeDestinos)
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

// console.log("Testando Condicionais: EGP Viagens:")

// const destinos = new Array (
//     `Dubbai`, 
//     `Egito`, 
//     `Maldivas`, 
//     `Grecia`, 
//     `Italia`, 
// );

// const idadeComprador = 17;
// const estaAcompanhado = false;
// const temPassagemComprada = true;

// console.log("Destinos Possiveis");
// console.log(destinos);

// if(idadeComprador >= 18 || estaAcompanhado){
//     console.log("Boa Viagem");
//     destinos.splice(2,1);
// }else{
//     console.log("Não é maior de idade não posso vender");
// }

// console.log("Embarque Chek in: \n \n")
// if(idadeComprador >= 18 && temPassagemComprada){
//     console.log("Boa Viagem");
//     destinos.splice(2,1);
// }else{
//     console.log("Você não pode embarcar");
// }