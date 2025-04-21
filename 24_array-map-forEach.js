// Methods that iterate over an array
// Methods that DO NOT modify the original array

// map()

const numbers = [1, 2, 3, 4, 5]

const squareNumbers = numbers.map(num => num * num)

console.log(numbers) // [1, 2, 3, 4, 5]
console.log(squareNumbers) // [1, 4, 9, 16, 25]

// forEach()

const colors = ['red', 'green', 'blue']

const iterateColors = colors.forEach(color => console.log(color))

console.log(colors) // ['red', 'green', 'blue']
console.log(iterateColors) // undefined

// Exercise: Fahrenheit to Celsius conversion

const temperaturesF = [32, 68, 104, 212]
const temperaturesC = temperaturesF.map(temp => (temp - 32) * 5 / 9)

console.log(`Temperatures in Fahrenheit: ${temperaturesF}`) // [32, 68, 104, 212]
console.log(`Temperatures in Celsius: ${temperaturesC}`) // [0, 20, 40, 100]

// Exercise: Sum of all elements in an array
const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

numbersArray.forEach(num => sum += num)

console.log(`Sum of all elements: ${sum}`) // 15