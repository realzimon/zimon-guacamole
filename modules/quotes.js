let quoteEditTemplate;
$.get("components/quoteEdit.html", function(response) {
  quoteEditTemplate = response;
});
//every 3 hours
let interval = setInterval(dailyQuote, 10800000);

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
    let div = $(this).parent().parent();
    let q = div.find('#quoteContent').val();
    mysqlService.newQuoteDB(q);
    clearQuotes();
    $("#quote").prepend(quoteEditTemplate);
  });
  $("#exit").click(function() {  });
  //InputChange
  $(".input-group #quoteContent").bind('input', function() {
    let div = $(this).parent();
    div.find(".quoteButton").removeClass("btn-primary").addClass("btn-warning");
  });
}

module.exports.dailyQuote = dailyQuote;
module.exports.editQuote = editQuote;
module.exports.reloadDailyQuote = reloadDailyQuote;
