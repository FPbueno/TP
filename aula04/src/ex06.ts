class Carro{
    private static  contador = 0;//static diz que ele pertence somente a classe e somente é propriedade dela
    private _marca = "";
    private _modelo = "";
    constructor(marca:string,modelo:string){
        this._marca = marca;
        this._modelo = modelo;
        Carro.contador++;
    }
    get marca():string {
        return this._marca;
    }
    set marca(marca:string) {
        this._marca = marca;
    }
    get modelo():string {
        return this._modelo;
    }
    set modelo(modelo:string){
        this._modelo = modelo;
    }
    static getContador():number{
        return Carro.contador;
    } 
}
const x = new Carro("VW","Gol");

const y = new Carro("Fiat","Uno");

const z = new Carro("GM", "Corsa");

console.log("N° de objetos carros criados", Carro.getContador())
