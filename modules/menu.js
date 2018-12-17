//every 6 hours
let interval = setInterval(getDailyMenu, Config.menu.queryTime);

function startDailyMenu() {
    //Append all the html parts to the index.html
    getDailyMenu();
}

function getDailyMenu() {
    //Fladerei
    fetch(Config.menu.flade.url)
        .then(res => res.text())
        .then(FladeData => {
            let start = FladeData.indexOf(Config.menu.flade.start);
            let fladeStart = FladeData.indexOf("<td>", start) + 4;
            let fladeEnd = FladeData.indexOf("</td>", fladeStart);
            document.querySelector("#flade").innerHTML = FladeData.substr(fladeStart, (fladeEnd - fladeStart));
        });

    //Mensa
    fetch(Config.menu.mensa.url)
        .then(res => res.text())
        .then(mensaMenuText => {
            let mensaMenuDOM = new DOMParser().parseFromString(mensaMenuText, "text/html");
            let mensaUl = document.querySelector("#mensa-menu");
            mensaUl.innerHTML = "";
            let dailyMeal = mensaMenuDOM.querySelectorAll('.aw-meal-description');
            let mensaMealsFormated = "";
            dailyMeal.forEach(function (meal, i) {
                if (i !== dailyMeal.length - 1) {
                    //Last item with aw-meal class isn't a meal
                    mensaMealsFormated += ("<li class='pb-3'>" + meal.textContent + "</li>");
                }
            });
            mensaUl.innerHTML = mensaMealsFormated;
        });
}

function reloadMenu() {
    clearInterval(interval);
    interval = setInterval(getDailyMenu, Config.menu.queryTime);
}

module.exports.startDailyMenu = startDailyMenu;
module.exports.reloadMenu = reloadMenu;
