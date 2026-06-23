let contador=0;


function miFuncion(params) {
    
    let paramsMayusculas= params.toUpperCase();
    console.log("Hola Mundo:"+paramsMayusculas);
    contador++;
    
}

console.log("contador:"+contador);

miFuncion("Duke");
miFuncion("Duke");
miFuncion("Duke");
miFuncion("Duke");
miFuncion("Duke");
miFuncion("Duke");

console.log("contador:"+contador);
console.log("paramsMayusculas:"+paramsMayusculas);
