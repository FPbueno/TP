"use strict";
function somar(a, b) {
    if (a < b) {
        return a + b;
    }
    else {
        return "" + a + b;
    }
}
console.log("Resultado:", somar(1, 2));
console.log("Resultado:", somar(5, 3));
