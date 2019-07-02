setInterval(showCatFact, Config.catFacts.queryTime);

function showCatFact() {
  $.getJSON(Config.catFacts.apiUrl, function (catFactsData) {
    console.log(catFactsData.all + "");
    let random = Math.floor(Math.random() * catFactsData.all.length);
    let catFact = catFactsData.all[random].text;
    $('#catfact').html(catFact);
  });
}

// ohne Jquery
// function showCatFact() {
//   fetch(Config.catFacts.apiUrl)
//     .then(res => res.json())
//     .then(data => {
//         let random = Math.floor(Math.random() * data.all.length);
//         document.getElementById("catfact").innerHTML = data.all[random].text;
//     });
// }

module.exports.showCatFact = showCatFact;