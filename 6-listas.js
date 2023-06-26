console.log(`Trabalhando com Listas`);
// const saoPaulo =;
// const bahia =;
// const rioDeJaneiro =;

const listaDeDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Rio Grande do Norte`);//adc um item na lista
listaDeDestinos.push(`Arraial do Cabo`);
listaDeDestinos.push(`Maldivas`);
listaDeDestinos.push(`Egito`);
listaDeDestinos.push(`Italia`);
listaDeDestinos.push(`Fernanando de Noronha`);
listaDeDestinos.push(`Paris`);
console.log("EGP Viagens Destinos Possiveis");
// console.log(saoPaulo, bahia, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[4], listaDeDestinos[6]);