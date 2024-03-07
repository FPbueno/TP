class Ponto{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    distancia(ponto:Ponto):number{
        const dx = (this.x - ponto.x) ** 2;
        const dy = (this.y - ponto.y) ** 2;
        const d = Math.sqrt(dx + dy);
        return d;
    }
}

const a = new Ponto(3,5);
const b = new Ponto(1,2);
//observe que passamos como parâmetro um objeto do tipo Ponto
// console.log("Distância:", a.distancia(b));

export default Ponto;
