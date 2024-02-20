"use strict";
const sum = (a, b) => a + b;
const dif = (a, b) => a - b;
const operacao = (f, a, b) => f(a, b);
console.log("5 + 3:", operacao(sum, 5, 3));
console.log("5 - 3:", operacao(dif, 5, 3));
