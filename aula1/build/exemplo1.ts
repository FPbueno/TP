function somar2(...a:number[]){ //usando o forEach;
    let s=0;
    a.forEach ((e) => {
        s+=e;
    })
    return s;
}

console.log(somar2(9,5,6,1));



function dif2(vetor:number[]):number{ //usando estrutura de repetição for;
    let r = 0;
    for(let i=0; i < vetor.length; i++){
        r+=vetor[i]
    } 
    return r;
}

let nros:number[]=[9,5,6,1];
console.log(dif2(nros));

const mul=(x:number,y:number)=>{//usando arrow function mas no codigo do professor ele fez uma função normal e atribuiu ela a uma variavel no caso seria algo com const mul = function();
    return x*y;
}

const outro=mul;

console.log(mul(2,3));

console.log(outro(2,3));

//arrow functions;
const pow =(x:number,y:number):number =>{
    return x**y;
}

//nesse caso se voce tira a chave só é possivel passar um unico parametro;
const pot = (x:number,y:number):number => x**y;

console.log(pow(2,3));