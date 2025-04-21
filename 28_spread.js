// Copyting an array

const originalArray = [1, 2, 3, 4, 5]
const copyArray = [...originalArray]

console.log(originalArray) // [1, 2, 3, 4, 5]
console.log(copyArray) // [1, 2, 3, 4, 5]

// Combining arrays
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

console.log(array1) // [1, 2, 3]
console.log(array2) // [4, 5, 6]
console.log(combinedArray) // [1, 2, 3, 4, 5, 6]


// Adding elements to an array
const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5]

console.log(baseArray) // [1, 2, 3]
console.log(arrayWithAdditionalElements) // [1, 2, 3, 4, 5]

// Pass an array to a function

function sum (a, b, c) {
    return a + b + c
}

const numbersArray = [1, 2, 3]
const result = sum(...numbersArray)

console.log(result) // 6

