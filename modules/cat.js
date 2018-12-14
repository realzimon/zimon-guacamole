setInterval(showCatFact, Config.catFacts.queryTime);

function showCatFact() {
    fetch(Config.catFacts.apiUrl)
        .then(res => res.json())
        .then(data => {
            let random = Math.floor(Math.random() * data.all.length);
            document.querySelector("#catfact").innerHTML = data.all[random].text;
        });
}

module.exports.showCatFact = showCatFact;