// Methods that DO NOT modify the original array

// find()

const mutipleOfFive = [5, 10, 15, 20, 25, 30]

const firstNummberGreaterThan10 = mutipleOfFive.find(num => num > 10)

console.log(mutipleOfFive) // [5, 10, 15, 20, 25, 30]
console.log(firstNummberGreaterThan10) // 15

// findIndex()

const randomNumber = [6, 14, 27, 56, 40]

const indexNumber = randomNumber.findIndex(num => num > 50)

console.log(randomNumber) // [6, 14, 27, 56, 40]
console.log(indexNumber) // 3