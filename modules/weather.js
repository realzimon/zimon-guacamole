setInterval(showWeather, Config.weather.queryTime);

function showWeather() {
    fetch(Config.weather.apiUrl + "?id=" + Config.weather.locationId + "&appid=" + Config.weather.apiKey)
        .then(res => res.json())
        .then(data => {
            let weatherId = data.weather[0].icon + ".png";
            let weatherDescription = data.weather[0].description;
            let weatherImageUrl = Config.weather.imageUrl + weatherId;
            let weatherTemp = Math.round((data.main.temp - 273.15) * 100) / 100;
            document.querySelector("#weather").innerHTML = `${weatherTemp}°C <img src='${weatherImageUrl}'> ${weatherDescription} `;
        });
}

module.exports.showWeather = showWeather;
