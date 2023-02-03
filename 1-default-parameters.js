// 1. Default parameters

const API = {
  getWeather: () => 'Sunny'
}

// ❌ BAD 👎

// function getWeather(cityName) {
//   return API.getWeather(cityName || 'Bangkok')
// }

// 💖 GOOD 👍🏻

// function getWeather(cityName = 'Bangkok') {
//   return API.getWeather(cityName)
// }

function getWeather(cityName = requireCityName()) {
  return API.getWeather(cityName)
}

function requireCityName() {
  throw new Error('cityName parameter is required')
}
