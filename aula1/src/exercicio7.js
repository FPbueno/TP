"use strict";
const parImpar = (nro) => nro % 2 == 0 ? "par" : "ímpar";
const somarArray = (v) => {
    for (let i = 0; i < v.length; i++) {
        console.log(v[i], "é", parImpar(v[i]));
    }
};
const v = [5, 3, 1, 8, 2];
somarArray(v);
