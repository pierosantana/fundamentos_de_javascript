// Implícita

console.log(2 + true) // 3



// Explicita

// String()
// Number()
// Boolean()


// Explicit Type Casting
const string = '42'
const integer = parseInt(string) // 42
console.log(typeof integer) // number

const stringDecimal = '42.5'
const float = parseFloat(stringDecimal) // 42.5
console.log(typeof float) // number

const binary = '1011'
const decimal = parseInt(binary,2) // 11
console.log(typeof decimal) // number

// Implicit Type Casting

const sum = 3 + '5' // 35

const sumWithBoolean = '3' + true // 3true

const sumWithNumber = 2 + true // 3

const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log(stringValue + stringValue) // 1010
console.log(stringValue + numberValue) // 1010
console.log(stringValue + booleanValue) // 10true

console.log(numberValue + stringValue) // 1010
console.log(numberValue + numberValue) // 20
console.log(numberValue + booleanValue) // 11

console.log(booleanValue + booleanValue) // 2
console.log(booleanValue + stringValue) // true10
console.log(booleanValue + numberValue) // 11
