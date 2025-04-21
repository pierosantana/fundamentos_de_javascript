// Funciones puras

// Side Effects
// 1. Modificar una variable global
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensaje en pantalla o consola
// 5. Manipular el DOM
// 6. Obtener la fecha y hora actual

function sum(a, b) {
    return a + b
}

// Función impura

function sum(a, b) {
    console.log('A: ', a)
    return a + b
}

let total = 0
function sumWithSideEffect(a) {
    total += a
    return total
}

// Función pura
function square(x) {
    return x * x
}

function addTen(y) {
    return y + 10
}

const number = 5
const finalResult = addTen(square(number)) 
console.log(finalResult) // 35


// 1.Pureza básica
// Escribe una función pura suma(a, b) que no modifique nada fuera de su scope.
// Luego crea una función impura incrementaGlobal() que use/modifique una variable global contador.

function suma(a,b){
    return a + b
}
const contador = 0
function incrementoGlobal(){
    contador++
}

// 2.Manejo de listas
// Función pura añadeElemento(arr, el) que devuelva un nuevo array con el añadido sin mutar el original.

function addElement(arr, el){
    return [...arr, el]
}

// Ejemplo de uso
const arr = [1, 2, 3]
const nuevoArr = addElement(arr, 4)
console.log(arr) // [1, 2, 3]
console.log(nuevoArr) // [1, 2, 3, 4]

// Función impura añadeInPlace(arr, el) que use push.

function addInPlace(arr, el){
    arr.push(el)
}
// Ejemplo de uso
const arr2 = [1, 2, 3]
addInPlace(arr2, 4)
console.log(arr2) // [1, 2, 3, 4]


// 3.Efectos secundarios
// Implementa logAndSum(a, b) que imprima en consola (efecto secundario) y luego devuelva la suma.

function logAndSum(a, b) {
    console.log('Efecto secundario')
    return a + b
}

const suma2 = logAndSum(2, 3)
console.log(suma2) // 5
