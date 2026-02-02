export function admin(nombre) {
  return new Promise((resolve, reject) => {
    if (nombre === "admin") {
      resolve ("acceso concedido")
    } else {
      reject("acceso denegado")
    }
  });
}
