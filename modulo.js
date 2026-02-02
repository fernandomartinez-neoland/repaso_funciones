
import { bgColor } from "./funciones.js";

import { admin } from "./admin.js";
import { procesarSemaforo } from "./semaforo.js";


async function name(){
    const nombre=prompt("coloque un nombre");
    console.log(await admin(nombre))
    
}

function semaforo(mensaje){
    console.log(mensaje)
}
procesarSemaforo("cualquier cosa", semaforo)
name();