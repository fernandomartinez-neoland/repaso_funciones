export function win() {
  return new Promise((resolve, reject) => {
    const Rnum = Math.floor(Math.random() * 6);
    console.log("el numero es: ", Rnum)
    if (Rnum > 3) {
      resolve("ganaste");
    } else {
      reject("perdiste");
    }
  });
}
