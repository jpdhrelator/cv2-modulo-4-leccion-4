var a= 100;


function miFuncion() {
    console.log("dentro antes->",a);
    var a= 10;
    console.log("dentro despues->",a);
    
}

miFuncion();
console.log("fuera->",a);