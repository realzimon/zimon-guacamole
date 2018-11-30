$.get("resources/components/quoteEdit.html", function(response) {
  quoteEditTemplate = response;
});
//every 3 hours
var interval = setInterval(dailyQuote, 10800000);
var quotes;

function dailyQuote() {
  mysqlService.readRandomQuoteDB(function(quote) {
    $("#quote").html(quote);
  });
}

function reloadDailyQuote() {
  clearQuotes();
  interval = setInterval(dailyQuote, 10800000);
  dailyQuote();
}

function clearQuotes() {
  clearInterval(interval);
  $("#quote").empty();
}

function editQuote() {
  clearQuotes();
  $("#quote").prepend(quoteEditTemplate);
  //New
  $(".quoteButton").click(function() {
    var $div = $(this).parent().parent();
    var $q = $div.find('#quoteContent').val();
    mysqlService.newQuoteDB($q);
    clearQuotes();
    $("#quote").prepend(quoteEditTemplate);
    //$div.find(".quoteButton").removeClass("btn-warning").addClass("btn-primary");
  });
  $("#exit").click(function() {
    return;
  });
  //InputChange
  $(".input-group #quoteContent").bind('input', function() {
    var $div = $(this).parent();
    $div.find(".quoteButton").removeClass("btn-primary").addClass("btn-warning");
  });
}

module.exports.dailyQuote = dailyQuote;
module.exports.editQuote = editQuote;
module.exports.reloadDailyQuote = reloadDailyQuote;
