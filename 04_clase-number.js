// 1. Tipo entero y decimal
const entero = 10
const decimal = 10.5
console.log(typeof entero, typeof decimal) // number number

// 2. Notación científica
const cientifico = 5e3

// 3. Infinito y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// OPERACIONES ARITMÉTICAS

// 1. Suma, resta, multiplicación, división

const suma = 10 + 5
const resta = 10 - 5
const multiplicacion = 10 * 5
const division = 10 / 5

// 2. Módulo y potencia

const modulo = 10 % 3
const potencia = 2 ** 3

// Precisión
const numeroGrande = 0.1 + 0.2 // Resultado: 0.30000000000000004

// Solución: toFixed()
console.log(numeroGrande.toFixed(1)) // Resultado: 0.3

// El triple === compara el valor y el tipo de dato
console.log(numeroGrande === 0.3) // false

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16) // 4
const valorAbsoluto = Math.abs(-10) // 10
const aleatorio = Math.random() // Número aleatorio entre 0 y 1
