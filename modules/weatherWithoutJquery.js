function showWeather() {
    $.getJSON(Config.weatherUrl + "&appid=" + Config.weatherApiKey, function (WeatherData) {
        let weatherId = WeatherData.weather[0].icon + ".png";
        let weatherDescription = WeatherData.weather[0].description;
        let weatherImageUrl = Config.weatherImageUrl + weatherId;
        let weatherTemp = Math.round((WeatherData.main.temp - 273.15) * 100) / 100;
        $('#weather').html(weatherTemp + "°C <img src='" + weatherImageUrl + "'> " + weatherDescription);
    });

    setInterval(showWeather, 600000);
}

function showWeather() {
  fetch(Config.weatherUrl + "&appid=" + Config.weatherApiKey)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let weatherId = data.weather[0].icon + ".png";
      let weatherDescription = data.weather[0].description;
      let weatherImageUrl = Config.weatherImageUrl + weatherId;
      let weatherTemp = Math.round((data.main.temp - 273.15) * 100) / 100;
      document.querySelector("#weather").innerHTML = `${weatherTemp}°C <img src='${weatherImageUrl}'> ${weatherDescription} `;
      //$('#weather').html(weatherTemp + "°C <img src='" + weatherImageUrl + "'> " + weatherDescription);
    })

    setInterval(showWeather, 600000);
}

module.exports.showWeather = showWeather;
