let quoteEditTemplate;

fetch("./components/quoteEdit.html")
  .then(res => quoteEditTemplate = res.text())
  .then(data => quoteEditTemplate = data)

//every 3 hours
let interval = setInterval(dailyQuote, 10800000);

function dailyQuote() {
  mysqlService.readRandomQuoteDB(function (quote) {
    document.querySelector("#quote").innerHTML = quote;
  });
  Cat.showCatFact();
}

function reloadDailyQuote() {
  clearQuotes();
  interval = setInterval(dailyQuote, 10800000);
  dailyQuote();
}

function clearQuotes() {
  clearInterval(interval);
  document.querySelector("#quote").innerHTML = "";
}

function editQuote() {
  clearQuotes();
  let quote = document.querySelector("#quote");
  quote.insertAdjacentHTML("afterbegin", quoteEditTemplate);
  //New
  document.querySelector(".quoteButton").addEventListener("click", () => {
    let div = document.querySelector(this).parentNode.parentNode;
    let q = div.querySelectorAll("#quoteContent").value;
    mysqlService.newQuoteDB(q);
    clearQuotes();
    quote.insertAdjacentHTML("afterbegin", quoteEditTemplate);
  })

  document.querySelector("#exit").addEventListener("click", () => { })

  //InputChange
  document.querySelector().addEventListener("input", () => {
    let div = document.querySelector(this).parentNode;
    div.querySelectorAll(".quoteButton").classList.remove("btn-primary").classList.add("btn-warning");
  })
}


module.exports.dailyQuote = dailyQuote;
module.exports.editQuote = editQuote;
module.exports.reloadDailyQuote = reloadDailyQuote;
