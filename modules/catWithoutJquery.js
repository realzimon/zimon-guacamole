function showCatFact() {
    $.getJSON(Config.catFactsUrl, function (catFactsData) {
        let length = catFactsData.all.length;
        let random = Math.floor(Math.random() * length);
        let catFact = catFactsData.all[random].text;
        $('#catfact').html(catFact);
    });
}

function showCatImage() {
    $.getJSON(Config.catImageUrl, function (catImageData) {
        let catImageUrl = catImageData[0].url;
        $('#catimage').html("<img src='" + catImageUrl + "' width='250px' style='margin-top:-90px'>");
    });

    setInterval(showCatImage, 300000);
}


module.exports.showCatImage = showCatImage;
module.exports.showCatFact = showCatFact;