let expr = "uvas"

switch(expr){
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo.")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $40 el kilo.")
        break;
    case "Platanos":
        console.log("Los platanos cuestan $30 el kilo.")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Las papayas y los mangos cuestan $50 el kilo.")
        break;
    default:
        console.log(`ooops, no tenemos ${expr} en la tienda.`)
}

console.log("¿Hay algo más que te gustaría comprar?") 