
/* Juego Adivinanzas*/

/* Declaro const */
const adivinanzas = [{pregunta: "Soy pequeña como un ratón y cuido la casa como un león ¿ Qué soy?",respuesta:"llave"},{pregunta:"Llego años en el mar pero no se nadar",respuesta:"arena"},{pregunta:"¿Qué es lo que siempre va pero nunca llega?",respuesta: "camino"}];

/*Función, condicional y ciclo */

function jugarAdivinanza(){
    for (let i = 0; i < adivinanzas.length; i++) {let respuesta = "";
    
    while(respuesta.toLowerCase() !== adivinanzas[i].respuesta) {respuesta = prompt(adivinanzas[i].pregunta);
    
    if (respuesta.toLowerCase() === adivinanzas[i].respuesta) {alert("¡Respuesta correcta!");} 
    
    else {alert("Inténtalo de nuevo.");}}}alert("Fin del juego.");
}
/*Llamo la función*/
jugarAdivinanza();