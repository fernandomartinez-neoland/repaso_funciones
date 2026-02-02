
const formColor= document.getElementById("colores")

formColor.addEventListener('submit', bgColor)

export function bgColor(e){
    e.preventDefault();
    const color=e.target.colorPickerrrrrr.value;
    console.log(color)

    document.body.style.backgroundColor=color
}

