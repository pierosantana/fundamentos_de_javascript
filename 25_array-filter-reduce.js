// Cada elemento del array pasa por la función, 
// si cumple la condición, se queda en el nuevo array.

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0)

console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(evenNumbers) // [2, 4, 6, 8, 10]

// Ejecuta una función para cada elemento del array,
// devolviendo como resultado un único valor.

// reduce() · case 1

const numbersReduce = [1, 2, 3, 4, 5]

const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce) // [1, 2, 3, 4, 5]
console.log(sum) // 15

// reduce() · case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]){
        accumulator[currentValue]++
    }else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})


console.log(wordFrecuency)