export function procesarSemaforo(color, mensaje){
    switch (color){
        case "verde":
            mensaje("Continuar")
            break;
        case "amarillo":
            mensaje("Cuidado")

            break;
        case "rojo":
            mensaje("Detengase")

            break;
        default:
            mensaje("Opción invalida")

    }
}