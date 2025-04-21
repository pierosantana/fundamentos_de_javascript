function calculateDiscountedPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 15

const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log(`El precio original es: $${originalPrice}`)
console.log(`El porcentaje de descuento es: ${discountPercentage}%`)
console.log(`El precio final con descuento es: $${finalPrice}`)

// 1.Cálculo de factorial
// Escribe una función factorial(n) que reciba un entero ≥0 y devuelva su factorial.
// Prueba con varios valores (0, 1, 5, 10)

// El factorial de un número n es el producto de todos los enteros positivos desde 1 hasta n.
// Por ejemplo, el factorial de 4 es 4 * 3 * 2 * 1 = 24.

// Va desde el n hasta 1 al utilizar la recursividad.
// Detiene la recursividad cuando n es 0 o 1.
// Si se ingresa un número negativo, se puede agregar una validación para que devuelva un mensaje de error o 0.
function factorial(n){
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(4))


// 2.Generador de saludo
// Crea greet(name, timeOfDay) que reciba un nombre y un saludo (“mañana”, “tarde”, “noche”) 
// y devuelva un mensaje como “¡Buenos días, Ana!”.


function greet(name, timeOfDay) {
    let saludo = ""
    switch (timeOfDay) {
        case "mañana":
            saludo = "¡Buenos días"
            break
        case "tarde":
            saludo = "¡Buenas tardes"
            break
        case "noche":
            saludo = "¡Buenas noches"
            break
        default:
            saludo = "¡Hola"
    }
    return `${saludo}, ${name}!`
}

console.log(greet('Piero', 'tarde'));
