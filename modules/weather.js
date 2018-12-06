function showWeather() {
    $.getJSON(Config.weatherUrl + "&appid=" + Config.weatherApiKey, function (WeatherData) {
        let weatherId = WeatherData.weather[0].icon + ".png";
        let weatherDescription = WeatherData.weather[0].description;
        let weatherImageUrl = Config.weatherImageUrl + weatherId;
        let weatherTemp = Math.round((WeatherData.main.temp - 273.15) * 100) / 100;
        $('#weather').html(weatherTemp + "°C <img src='" + weatherImageUrl + "'> " + weatherDescription);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        alert('getJSON request failed! ' + textStatus);
    });

    setInterval(showWeather, 1000*60*5);
}


module.exports.showWeather = showWeather;
