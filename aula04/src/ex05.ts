import Carro from "./ex04";

const carros:Carro[] = [];
let carro = new Carro("VW","Gol");
carros.push(carro);
carro = new Carro("Fiat","Uno");
carros.push(carro);
carro = new Carro("GM", "corsa")
carros.push(carro);

carros.forEach((c) => {
    console.log(c.marca,c.modelo);
})