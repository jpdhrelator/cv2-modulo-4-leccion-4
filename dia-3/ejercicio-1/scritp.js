
const sumar = (a,b)=> a+b;
const restar = (a,b)=> a-b;
const multiplicar = (a,b)=> a*b;
const dividir = (a,b)=> {
    if (b===0) "Error no se puede dividir por 0";
    return a/b; 
};

let opcion;

do{
    console.log("\n=== Iniciando CALCULADORA ===");
    opcion = prompt(`
           CALCULADORA
            1) Sumar
            2) Restar
            3) Multiplicar
            4) Dividir
            5) Salir
        `);

    
    let num1;
    let num2;
    const pedirNros = ()=>{
        num1= Number(prompt('Ingresa el primer nro'));
        num2= Number(prompt('Ingresa el segundo nro'));
    }  
    const mostrarResultado=(rslt)=> alert(`El resutlado es ${rslt}`);
    

    let resultado;
    switch (opcion) {
        case "1":
            pedirNros();
            resultado= sumar(num1,num2);
            mostrarResultado(resultado);
            break;
        case "2":
            pedirNros();
            resultado= restar(num1,num2);
            mostrarResultado(resultado);
            break;
        case "3":
            pedirNros();
            resultado= multiplicar(num1,num2);
            mostrarResultado(resultado);
            break;
        case "4":
            pedirNros();
            resultado= dividir(num1,num2);
            mostrarResultado(resultado);
            break; 
        case "5":
            console.log("Programa Terminado");
               
        default:
            resultado="Opción inválida"
            break;
    }

}while(opcion!="5");