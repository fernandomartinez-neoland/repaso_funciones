
import { bgColor } from "./funciones.js";

import { admin } from "./admin.js";


async function name(){
    const nombre=prompt("coloque un nombre");
    console.log(await admin(nombre))
    
}
name();