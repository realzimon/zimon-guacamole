//every 6 hours
let interval = setInterval(getDailyMenu, 21600000);

function getDailyMenu() {
  //Schaut nach der Zelle neben Berggasse
  $.ajax({
      url: Config.fladeUrl,
      success: function(FladeData){
        let berggasseStart = FladeData.indexOf("Berggasse");
        let fladeStart = FladeData.indexOf("<td>", berggasseStart) + 4;
        let fladeEnd = FladeData.indexOf("</td>", fladeStart);
        let tagesflade = FladeData.substr(fladeStart, (fladeEnd - fladeStart));
        $("#flade").html(tagesflade);
      }
    });

  $.ajax({
    url: Config.mensaUrl,
    success: function(mensaData) {
      let mensaMenu=$("#mensa-menu");
      mensaMenu.empty();
      let dailyMealSize = $(mensaData).find('.aw-meal-description').length;
      for (let i = 0; i < dailyMealSize - 1; i++) {
        let dailyMeal = $(mensaData).find('.aw-meal-description')[i].innerHTML;
        $("<li class='pb-3'>" + dailyMeal + "</li>").appendTo(mensaMenu);
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
