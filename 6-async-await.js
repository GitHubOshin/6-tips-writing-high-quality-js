// 6 Async/Await

const API = {
  getWeather: () => Promise.resolve(),
  process: () => Promise.resolve()
}

// ❌ BAD 👎

// function getWeather() {
//   return API.getWeather()
//     .then((weather) => {
//       return API.process(weather)
//     })
//     .then((weather) => {
//       console.log(`Weather is ${weather}`)
//     })
// }

// 💖 GOOD 👍🏻

async function getWeather() {
  const weather = await API.getWeather()
  console.log(`Weather is ${await API.process(weather)}`)
}
