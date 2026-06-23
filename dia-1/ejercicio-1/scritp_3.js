function miFuncion() {
    let num1=1;
    let num2=1;

    let total= num1 + num2;

    return total;


    console.log("total: ",total);
    
}
/*
let total= miFuncion();
console.log("total fuera: ",total);
*/

function miFuncion2(params) {
    if(!params){ // "" 0 undefined null --> falsy
        return;
    }
    console.log("params:",params);
    
}

//miFuncion2("")

function dividir(a,b) {
    if (b === 0) {
        return 0;
    }

    return a/b; 
}

//resultado= dividir(4,0);
//console.log("resultado:", resultado);


function transformar(params) {
    if (!params) {
        return "-";
    }

    return params.toLowerCase()+"-34-45";
}

console.log(transformar(''));
