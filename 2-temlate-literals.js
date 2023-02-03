// 2. Temlate literals

// ❌ BAD 👎

function toString(name, lastname) {
  return 'Name :' + name + ', LastName :' + lastname
}

// 💖 GOOD 👍🏻

function toString(name, lastname) {
  return `Name : ${name}, LastName : ${lastname}`
}
