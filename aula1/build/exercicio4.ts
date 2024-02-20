const fun = function(v1:Array<number>,v2:Array<string>) {
    let res = [];
    for(let i = 0; i < v1.length; i++){
    res[i] = v1[i] + v2[i];
    }
    return res;
    }
    const vet12 = [5,3,1,8,2];
    const vet22 = ["M","a","r","i","a"];
    console.log("Resultado:", fun(vet12,vet22));