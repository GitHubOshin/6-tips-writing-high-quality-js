// 3. Destructuring

const person = {
  name: 'Jonh',
  lastName: 'Doe',
  age: 25,
  location: {
    city: 'Bangkok',
    country: 'Thailand'
  }
}

// ❌ BAD 👎

// function toString() {
//   return `Name : ${person.name}, LastName : ${person.lastName}`
// }

// 💖 GOOD 👍🏻

function toString({ name, lastName }) {
  return `Name : ${name}, LastName : ${lastName}`
}

console.log(toString(person))

// ❌ BAD 👎

// const food = ['🍣 ', '🍕', '🍰', '🍚']
// const sushi = food[0]
// const pizza = food[1]
// const cake = food[2]

// 💖 GOOD 👍🏻

const food = ['🍣 ', '🍕', '🍰', '🍚']
// const [sushi, pizza, cake] = food
const [, pizza] = food // [, '🍕']
