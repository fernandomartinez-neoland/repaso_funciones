import { bgColor } from "./funciones.js";

import { admin } from "./admin.js";
import { procesarSemaforo } from "./semaforo.js";
import { win } from "./win.js";

async function name() {
  const nombre = prompt("coloque un nombre");
  console.log(await admin(nombre));
}

async function random() {
  console.log(await win());
}
console.log();

function semaforo(mensaje) {
  console.log(mensaje);
}
procesarSemaforo("cualquier cosa", semaforo);
// name();

random();
