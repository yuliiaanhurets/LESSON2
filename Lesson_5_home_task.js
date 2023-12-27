// Creating a new array
let numbers = [1, 1, 1, 2, 3, 4, 5, 5, 66, 6, 6, 7, 77, 8, 8, 8888, 9];

// Loop through the array and add "5" to each number 
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i] + 5
    console.log(num)
}

// Creating a set with unique values from the array
let numbersSet = new Set(numbers);

// Iterating of set and increasing of each number by 2 
let sum = 0;

for (const number of numbersSet) {
    multiplicationNumber = number * 2

    sum += multiplicationNumber
}

console.log("Sum of numbers is " + sum);

// Create a map with alphabetical letters and values from the set. Concatenate map keys
const letters = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
    ["f", 66],
    ["g", 6],
    ["h", 7],
    ["i", 77],
    ["j", 8],
    ["k", 8888],
    ["l", 9]
]);

// Option 1
let keys = Array.from(letters.keys()).reduce((acc, curr) => acc.concat(curr), '');
console.log("Concatenation of set keys: " + keys)

// Option 2
let keys2 = Array.from(letters.keys()).join('')
console.log("Concatenation of set keys: " + keys2)