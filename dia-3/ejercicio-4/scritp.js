const tareas= [];

/*
    tarea 
    {
        texto,
        realizada
    }
*/


const agregar = (texto)=>{
    tareas.push({ texto , realizada:false});
}
const verTareas= ()=>{
    if(tareas.length==0)return "No existe esa tarea";

    let mensaje="";
    tareas.forEach((tarea)=>{
        let txtMarcada=(tarea.realizada)? "[✓]" : "[ ]";
        mensaje+= `${txtMarcada} ${tarea.texto}\n`
    });
    return mensaje;
}
const completarTarea=(num)=>{
    const tarea = tareas[num-1];
    tarea.realizada = true;
    tareas[num-1]=tarea;
    return `✅ Completada: ${tarea.texto}`
}

const pendientes= ()=>{
    let tareasPendientes=tareas.filter((tarea)=> !tarea.realizada);
    let mensaje="";
    tareasPendientes.forEach((tarea)=> mensaje+= `[ ] ${tarea.texto}\n`);
     return mensaje;
}

const todoListApp=()=>{

    let opcion;

    do {
         opcion=prompt(`
                ****** CAJERO ******
                1) Agregar
                2) Ver todas
                3) Completar Tarea
                4) Ver Pendientes
                5) Salir
            `);

        switch (opcion) {
            case "1":
                let txt=prompt("Ingresar tu Tarea");
                agregar(txt);
                alert("Tarea ingresada correctamente");
                break;
            case "2":
                alert(verTareas());
                break;
            case "3":
                let nroTarea=Number(prompt("Ingresar tu Tarea"));
                if(nroTarea<0 || nroTarea>tareas.length){
                    alert("el nro es invalido");
                    break;
                }
                alert(completarTarea(nroTarea));
                break;
            case "4":
                alert(pendientes());
                break;
            case "5":
                alert("¡A trabajar! ✊, bye");
                break;
            default:
                alert("opción inválida");
                break;
        }
        
    } while (opcion!="5");


}
todoListApp();