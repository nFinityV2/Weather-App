const key = "b837d69f65925ad53af16d2dd1982847"
const iconUrl =  "https://openweathermap.org/img/wn/"
const weather = document.getElementById('weather-container')

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-37.84&lon=44.34&units=metric&appid=${key}`)
    .then(response => response.json())
    .then(data => {
        weather.innerHTML = `<h2>${data.weather[0].main}</h2>
                             <img src="${iconUrl}${data.weather[0].icon}@2x.png" alt="weather-icon"/>
                             <p>Temperature: ${data.main.temp}C</p>
                             <p>Humidity: ${data.main.humidity}%</p>`
    })