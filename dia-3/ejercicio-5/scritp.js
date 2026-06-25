/*
    pregunta 
    {
       texto: string,
       opciones: [],
       correcta: number 
    }
*/

const preguntas= [
    { texto:"¿Cuánto es 2+2?", opciones: ["3", "4", "5"], correcta:2 },
    { texto:"¿Capital de Chile?", opciones: ["Santiago", "Lima", "Quito"], correcta:1 },
    { texto:"¿Qué hace map?", opciones: ["filtra", "ordena", "transforma"], correcta:3 },
]

const mostrarPregunta=(p,num)=>{

    return `
        Pregunta ${num}) ${p.texto}

        1) ${p.opciones[0]}
        2) ${p.opciones[1]}
        3) ${p.opciones[2]} 
        
        Escribe el nro de tu respuesta:
    `
}

let aciertos=0;
const quizApp=()=>{
    for (let i = 0; i < preguntas.length; i++) {
        const pregunta = preguntas[i];

        let resp= Number(prompt(mostrarPregunta(pregunta,i+1)));
        let result="";
        //(pregunta.correcta==resp)? "✅ ¡Correcto!" : `❌ Incorrecto. Era: ${pregunta.opciones[pregunta.correcta-1]} `;
       

        if(pregunta.correcta==resp){
            result="✅ ¡Correcto!";
            aciertos++;
        }else{
            result=`❌ Incorrecto. Era: ${pregunta.opciones[pregunta.correcta-1]}`;
        }
         alert(result);
    }

    alert(`Puntaje final: ${aciertos} /${preguntas.length}`)
}
quizApp();