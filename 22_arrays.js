// How to create an array in JavaScript

// 1. new Array() or Array()

const numbers = new Array(1, 2, 3, 4, 5)
console.log(numbers)

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits)

const justOneNumber = Array(5)
console.log(justOneNumber) // [ <5 empty items> ]

// 2. Array literal syntax

const oneNumber = [5]
console.log(oneNumber) // [5]


const emptyArray = []
console.log(emptyArray) // []

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports) // ['soccer', 'tennis', 'rugby']

const mixedArray = [
    'Flour',
    true,
    {
        ingredients: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(mixedArray) // ['Flour', true, { ingredients: 'Milk', quantity: '1 cup' }, false]

// Accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit) // apple

// Length property

const numberOfFruits = fruits.length
console.log(numberOfFruits) // 3

// Mutability of arrays

fruits.push('Watermelon')
console.log(fruits) // ['apple', 'banana', 'orange', 'Watermelon']

// Immutability of arrays

const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(fruits) // ['apple', 'banana', 'orange', 'Watermelon']
console.log(newFruits) // ['apple', 'banana', 'orange', 'Watermelon', 'grape', 'kiwi']

// Checking array with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray) // true

// Practical exercise: sum all elements of an array
const numbersArray = [1, 2, 3, 4, 5]
let sum = 0
for (num of numbersArray) {
    sum += num
}
console.log(sum) // 15




