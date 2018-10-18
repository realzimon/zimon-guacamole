//every 3 hours
var interval = setInterval(dailyQuote, 10800000);

function dailyQuote() {
  $.ajax({
      url: ip + "getRandomQuote.php",
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

////
function editQuote() {
  stopQuote();
  $("#quotes").empty();
  $.ajax({
      url: ip + "getQuotes.php",
    })
    .done(function(json) {
      quotes = $.parseJSON(json);
      for (i = 0; i < quotes.length; i++) {
        if (i == 0) {
          //Insert first one
          $("#quotes").prepend(quoteEditTemplate);
        } else {
          $("#quote" + (i - 1)).clone().prop('id', 'quote' + i).appendTo("#quotes");
        }
        $("#quote" + i).find("#quoteId").val(quotes[i].id);
        $("#quote" + i).find("#q").val(quotes[i].quote);
      }
    });
  $("#quotes").prepend(quoteNewTemplate);
  $("#newquote").click(function() {
    $.ajax({
        url: ip + "newQuote.php",
      })
      .done(function(data) {
        editQuote();
        return;
      });
  });
  $(".quotebutton").click(function() {
    var $div = $(this).parent();
    var $id = $div.find("#quoteId").val();
    var $q = $div.find('#q').val();
    $.get(ip + "updateQuote.php", {
      id: $id,
      quote: $q
    });
  });
}
