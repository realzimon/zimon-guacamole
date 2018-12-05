function showWeather() {
    $.getJSON(Config.weatherUrl + "&appid=" + Config.weatherApiKey, function (WeatherData) {
        let weatherId = WeatherData.weather[0].icon + ".png";
        let weatherDescription = WeatherData.weather[0].description;
        let weatherImageUrl = Config.weatherImageUrl + weatherId;
        $('#weather').html("<img src='" + weatherImageUrl + "'> "+weatherDescription);
    })
        .fail(function (jqXHR, textStatus, errorThrown) {
            alert('getJSON request failed! ' + textStatus);
        });

}

module.exports.showWeather = showWeather;
