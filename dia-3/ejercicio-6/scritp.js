/* 
    titular:string,
    saldo: number
*/


const cuentas = []; 
const formatearPesos = monto => `$ ${parseInt(monto).toLocaleString("es-CL")}`;
buscar=(titular)=>cuentas.find((c)=>c.titular=== titular);

const crearCta=(titular)=>{
    if(buscar(titular )) return "Ya existe el titular";

    cuentas.push({ titular , saldo:0});

    return `✅ Cuenta de ${titular} creada`
}

const depositar= (titular, monto)=>{
    const cta= buscar(titular);
    if(!cta) return "No existe la cuenta";

    cta.saldo += monto;
    return `ahora tiene $ ${formatearPesos(cta.saldo)}`
}

const transferir = (origen, destino, monto) => {
    const ctaOrigen=buscar(origen);
    const ctaDestino=buscar(destino);

    if(!ctaOrigen || !ctaDestino) return "Una o las dos ctas son inválidas";

    if(ctaOrigen.saldo < monto) return "Fondos insuficientes";

    ctaOrigen.saldo -=monto;
    ctaDestino.saldo +=monto;

    return `Transferencia OK: ${origen} → ${destino}  $ ${formatearPesos(monto)}`
}
const listar = () => {
    let texto=""
    cuentas.forEach((c) => texto+=`
    -${c.titular} : ${formatearPesos(c.saldo)}
    `);
    return texto;
};

const bancoApp=()=>{

    do {
        opcion=prompt(`
                ****** BANCO ******
                1) Crear cuenta
                2) Listar
                3) Depositar
                4) Transferir
                5) Salir
            `);

        let titular;
        let monto;
        switch (opcion) {
            case "1":
                 titular= prompt("Ingrese Nombre Titular");
                alert(crearCta(titular));
                break
            case "2":
                alert(listar());
                break;
            case "3":
                 titular= prompt("Ingrese Nombre Titular");
                 monto= Number(prompt("Ingrese el monto"));
                alert(depositar(titular,monto));
                break;
            case "4":
                 titularO= prompt("Ingrese Nombre Titular Origen");
                 titularD= prompt("Ingrese Nombre Titular Destino");
                 monto= Number(prompt("Ingrese el monto"));
                alert(transferir(titularO,titularD,monto));
                break;
            case "5":
                alert("Banco cerrado 🏦");
                break;
            default:
                alert("Opción inválida");
                break;
        }
        
    } while (opcion!="5");
}

bancoApp();
