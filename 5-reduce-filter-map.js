// 5. Reduce, Filter, Map

// ❌ BAD 👎

// const numbers = [1, 2, 3]
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }

// 💖 GOOD 👍🏻

const numbers = [1, 2, 3]

const sum = numbers.reduce((total, value) => total + value, 0)
const evens = numbers.filter((value) => value % 2 === 0)
const square = numbers.map((value) => value ** 2)
