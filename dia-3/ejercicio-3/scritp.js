let saldo=0;
const formatearPesos = monto => `$ ${parseInt(monto).toLocaleString("es-CL")}`;
const depositar= (monto)=> {
    saldo+= monto;
    return saldo;
}
const girar = (monto)=>{
    if(monto > saldo){
        alert("❌ Fondos insuficientes");
        return saldo;
    }
    saldo-= monto;

    return saldo;
}

const cajero=()=>{

    let opcion;

    do {
        opcion=prompt(`
                ****** CAJERO ******
                1) Depositar
                2) Girar
                3) Consultar
                4) Salir
            `);
        let monto;
        const perdirMonto=(texto)=> monto=Number(prompt(texto))
        
        if(opcion =="1"){
            perdirMonto("Ingrese monto a depositar");
            let montoFinal=depositar(monto);

            alert(`Su depósito fue realizado con éxito,su monto final es ${formatearPesos(montoFinal)}`);
        }else if (opcion =="2"){
            perdirMonto("Ingrese monto a girar");
            let montoFinal=girar(monto);
            alert(`Su giro fue realizado con exitosamete, monto final es ${formatearPesos(montoFinal)}`);
        }else if(opcion =="3"){
            alert(`su monto disponible es ${formatearPesos(saldo)}`);
        }else if(opcion =="4"){
            alert("Gracias por usar el cajero 👋");
        }else {
            alert("Opción inválida");
        }
        
    } while (opcion !="4");
}

cajero();