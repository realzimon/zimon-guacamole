//every 6 hours
let interval = setInterval(getDailyMenu, 21600000);

function getDailyMenu() {
  //Schaut nach der Zelle neben Berggasse
  fetch(Config.fladeUrl)
    .then(res => res.text())
    .then(data => {
      let berggasseStart = data.indexOf("Berggasse");
      let fladeStart = data.indexOf("<td>", berggasseStart) + 4;
      let fladeEnd = data.indexOf("</td>", fladeStart);
      let tagesflade = data.substr(fladeStart, (fladeEnd - fladeStart));
      document.querySelector("#flade").innerHTML = tagesflade;
    })

  fetch(Config.mensaUrl)
    .then(res => res.text())
    .then(data => {
      let mensaMenu = document.querySelector("#mensa-menu");
      mensaMenu.innerHTML = "";
      let dailyMealSize = document.querySelector(data).querySelectorAll(".aw-meal-description").length;
      //let dailyMealSize = $(mensaData).find('.aw-meal-description').length;
      for (let i = 0; i < dailyMealSize - 1; i++) {
        let dailyMeal = document.querySelector(data).querySelectorAll('.aw-meal-description')[i].innerHTML;
        let li = createElement("li").setAttribute("class", "pb-3").text = dailyMeal;
        mensaMenu.append(li);
      }
      document.querySelector("#flade").innerHTML = tagesflade;
    })
}

function reloadMenu() {
  //Stop current loop
  clearInterval(interval);
  interval = setInterval(getDailyMenu, 21600000);
}

module.exports.getDailyMenu = getDailyMenu;
module.exports.reloadMenu = reloadMenu;
