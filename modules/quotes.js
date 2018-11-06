var quoteTemplate, quoteEditButton;
$.get("components/quoteCard.html", function(response) {
  quoteTemplate = response;
});
$.get("components/quoteEdit.html", function(response) {
  quoteEditTemplate = response;
});
$.get("components/quoteEditButton.html", function(response) {
  quoteEditButton = response;
});

//every 3 hours
var interval = setInterval(dailyQuote, 10800000);
var quotes;

function dailyQuote() {
  $.ajax({
      url: Vars.ip + "getRandomQuote.php",
    })
    .done(function(data) {
      $("#quote").html(data);
    });
}

function reloadDailyQuote() {
  stopQuote();
  interval = setInterval(dailyQuote, 10800000);
}

function stopQuote() {
  //Stop current loop
  clearInterval(interval);
}

function clearQuotes() {
  $("#quotes").empty();
}

function readQuotes() {
  $.ajax({
      url: Vars.ip + "getQuotes.php",
    })
    .done(function(json) {
      quotes = $.parseJSON(json);
      editQuote();
    });
}

////
function editQuote() {
  stopQuote();
  clearQuotes();

  for (i = 0; i < quotes.length; i++) {
    if (i == 0) {
      //Insert first one
      $("#quotes").prepend(quoteEditTemplate);
      //Insert new Button
      $("#quotes").prepend(quoteEditButton);
    } else {
      $("#quote" + (i - 1)).clone().prop('id', 'quote' + i).appendTo("#quotes");
    }
    $("#quote" + i).find("#quoteId").val(quotes[i].id);
    $("#quote" + i).find("#quoteContent").val(quotes[i].quote);
  }
  //newButton
  $("#newquote").click(function() {
    $.ajax({
        url: Vars.ip + "newQuote.php"
      })
      .done(function(data) {
        readQuotes();
        return;
      });
  });
  $("#exit").click(function() {
    return;
  });
  //InputChange
  $(".input-group #quoteContent").bind('input', function() {
    var $div = $(this).parent();
    $div.find(".quoteButton").removeClass("btn-primary").addClass("btn-warning");
  });
  //Edit
  $(".quoteButton").click(function() {
    var $div = $(this).parent().parent();
    var $id = $div.find("#quoteId").val();
    var $q = $div.find('#quoteContent').val();
    console.log("Button: " + $id + " ;; " + $q);
    $.get(ip + "updateQuote.php", {
      id: $id,
      quote: $q
    });
    $div.find(".quoteButton").removeClass("btn-warning").addClass("btn-primary");
  });
}

module.exports.dailyQuote = dailyQuote;
module.exports.readQuotes = readQuotes;
module.exports.reloadDailyQuote = reloadDailyQuote;
