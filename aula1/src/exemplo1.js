"use strict";
function somar2(...a) {
    let s = 0;
    a.forEach((e) => {
        s += e;
    });
    return s;
}
console.log(somar2(9, 5, 6, 1));
function dif2(vetor) {
    let r = 0;
    for (let i = 0; i < vetor.length; i++) {
        r += vetor[i];
    }
    return r;
}
let nros = [9, 5, 6, 1];
console.log(dif2(nros));
const mul = (x, y) => {
    return x * y;
};
const outro = mul;
console.log(mul(2, 3));
console.log(outro(2, 3));
const pow = (x, y) => {
    return x ** y;
};
const pot = (x, y) => x ** y;
console.log(pow(2, 3));
