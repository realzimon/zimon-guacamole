//every 6 hours
var interval = setInterval(getDailyMenu, 21600000);
const fladeAddress = "https://www.fladerei.com/dyn_inhalte/tagesflade.html";
const mensaAddress = "https://www.imensa.de/wien/omp/index.html";

function getDailyMenu() {
  //Schaut nach der Zelle neben Berggasse
  $.ajax({
      url: fladeAddress,
      success: function(data){
        var berggasseStart = data.indexOf("Berggasse");
        var fladeStart = data.indexOf("<td>", berggasseStart) + 4;
        var fladeEnd = data.indexOf("</td>", fladeStart);
        var tagesflade = data.substr(fladeStart, (fladeEnd - fladeStart));
        $("#flade").html(tagesflade);
      }
    });

  $.ajax({
    url: mensaAddress,
    success: function(data) {
      $("#mensa-menu").empty();
      let dailyMealSize = $(data).find('.aw-meal-description').length;
      for (let i = 0; i < dailyMealSize - 1; i++) {
        let dailyMeal = $(data).find('.aw-meal-description')[i].innerHTML;
        $("<li class='pb-3'>" + dailyMeal + "</li>").appendTo($("#mensa-menu"));
      }
    }
  });
}

function reloadMenu() {
  //Stop current loop
  clearInterval(interval);
  interval = setInterval(getDailyMenu, 21600000);
}

module.exports.getDailyMenu = getDailyMenu;
module.exports.reloadMenu = reloadMenu;
