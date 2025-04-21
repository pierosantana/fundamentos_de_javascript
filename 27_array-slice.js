// Method that returns a shallow copy of a portion 
// of an array into a new array.

// slice()

const animals = ['cat', 'dog', 'rabbit', 'elephant', 'tiger']
console.log(animals.slice(2)) // ['rabbit', 'elephant', 'tiger']
console.log(animals.slice(2, 4)) // ['rabbit', 'elephant']
console.log(animals.slice(-2)) // [ 'elephant', 'tiger' ]
console.log(animals.slice(1, -1)) // [ 'dog', 'rabbit', 'elephant' ]
console.log(animals.slice()) // [ 'cat', 'dog', 'rabbit', 'elephant', 'tiger' ]

