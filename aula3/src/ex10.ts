class Texto extends String {
    primeira(): string {
        return this.charAt(0);
    }
    ultima(): string {
        return this.charAt(this.length - 1);
    }
}

const s = new Texto("Boa Noite");
console.log("Quantidade:", s.length);
console.log("Primeira:", s.primeira());
console.log("Ultima:", s.ultima());
console.log("Minúscula", s.toLowerCase());