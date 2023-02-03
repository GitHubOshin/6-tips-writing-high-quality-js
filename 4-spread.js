// 4. Spread

// ❌ BAD 👎

// const animal = { name: 'pig' }
// animal.colour = 'pink'

// 💖 GOOD 👍🏻

const animal = { name: 'pig' }
animal = { ...animal, colour: 'pink' }

// ❌ BAD 👎

// const food = ['🍣 ', '🍕', '🍰', '🍚']
// food.push('💖')

// 💖 GOOD 👍🏻

const food = ['🍣 ', '🍕', '🍰', '🍚']
food = [...food, '💖']
