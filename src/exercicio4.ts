class Carro {
    marca: string = "";
    modelo: string = "";
    setMarca(marca: string): void {
        this.marca = marca;
    }
    setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    print(): void {
        console.log(`${this.marca} ${this.modelo}`);
    }
}

const u = new Carro();
const w = new Carro();
u.setMarca('VW'),u.setModelo('Gol');
w.setMarca('Fiat'),w.setModelo('Uno');

u.print();
w.print();