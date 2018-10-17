//every 3 hours
var interval = setInterval(getTagesFlade, 10800000);

function dailyQuote(){
  $.ajax({
      url: "http://localhost/zimon/database/getRandomQuote.php",
    })
    .done(function(data) {
      $("#quote").html(data);
    });
}

function reloadDailyQuote(){
  //Stop current loop
  clearInterval(interval);
  interval = setInterval(getTagesFlade, 10800000);
}
