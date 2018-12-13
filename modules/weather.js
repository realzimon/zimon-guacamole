function showWeather() {
    $.getJSON(Config.weatherUrl + "&appid=" + Config.weatherApiKey, function (WeatherData) {
        let weatherImageUrl = "https://" + WeatherData.current.condition.icon;
        let weatherDescription = WeatherData.current.condition.text;
        let weatherTemp = WeatherData.current.temp_c;
        $('#weather').html(weatherTemp + "°C <img src='" + weatherImageUrl + "'> " + weatherDescription);
    });

    setInterval(showWeather, 600000);
}

module.exports.showWeather = showWeather;
