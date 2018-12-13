let weatherTimer = setInterval(showWeather, 600000);
function showWeather() {
    $.getJSON(Config.weatherUrl + "&appid=" + Config.weatherApiKey, function (WeatherData) {
        let weatherId = WeatherData.weather[0].icon + ".png";
        let weatherDescription = WeatherData.weather[0].description;
        let weatherImageUrl = Config.weatherImageUrl + weatherId;
        let weatherTemp = Math.round((WeatherData.main.temp - 273.15) * 100) / 100;
        $('#weather').html(weatherTemp + "°C <img src='" + weatherImageUrl + "'> " + weatherDescription);
    });
}

module.exports.showWeather = showWeather;
