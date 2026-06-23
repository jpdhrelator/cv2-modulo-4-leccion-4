function miFuncion() {
    console.log("Hola Mundo");
    
}
//miFuncion();

//let variableFn = miFuncion;

function ejecutador(varFn) {
    varFn();
}
ejecutador(miFuncion);