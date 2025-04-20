/*
Closures definición: 
Una closure es una función que tiene acceso a su propio ámbito, al ámbito externo y al ámbito global.
Esto significa que una closure puede recordar y acceder a variables de su contexto léxico 
incluso cuando esa función se ejecuta fuera de su contexto original.
*/

function outerFunction () {
    let outerVariable = 'I am from outer function'

    function innterFunction () {
        console.log(outerVariable)
    }

    return innterFunction
}

const closureExample = outerFunction()
closureExample() // I am from outer function

function createCounter () {
    let count = 0

    return function () {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer () {
    let message = "Hello, "

    function inner (name) {
        console.log(message + name)
    }
    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Alice") // Hello, Alice
closureA("Bob") // Hello, Bob
