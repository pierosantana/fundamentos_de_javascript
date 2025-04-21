// Methods that modify the original array

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.

const countries = ['Spain', 'USA', 'Germany']
const newCountries = countries.push('Italy', 'France')

console.log(countries) // ['Spain', 'USA', 'Germany', 'Italy', 'France']
console.log(newCountries) // 5

// 2. pop() - Removes the last element from an array and returns that element. This method changes the length of the array.

const removedCountry = countries.pop()
console.log(countries) // ['Spain', 'USA', 'Germany', 'Italy']
console.log(removedCountry) // France