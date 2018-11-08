const ip = "http://localhost:9009/zimon/database/";

// var ziviTemplate, ziviEditTemplate, ziviEditButton;
// var quoteTemplate, quoteEditButton;
// var warTemplate;
// //Zivis
// $.get("components/ziviCards.html", function(response) {
//   ziviTemplate = response;
// });
// $.get("components/ziviEdit.html", function(response) {
//   ziviEditTemplate = response;
// });
// $.get("components/ziviEditButton.html", function(response) {
//   ziviEditButton = response;
// });
// //Quotes
// $.get("components/quoteCard.html", function(response) {
//   quoteTemplate = response;
// });
// $.get("components/quoteEdit.html", function(response) {
//   quoteEditTemplate = response;
// });
// $.get("components/quoteEditButton.html", function(response) {
//   quoteEditButton = response;
// });
// //War
// $.get("components/warTemplate.html", function(response) {
//   warTemplate = response;
// });

//Dynamic
var end;
var spanish = false;
var edit = false;
var war = false;
var listen=false;

function getSpanish() {
  return spanish;
}

function setSpanish(s) {
  spanish = s;
}

function getEdit() {
  return edit;
}

function setEdit(e) {
  edit = e;
}

function getWar() {
  return war;
}

function setWar(w) {
  war = w;
}

module.exports.war = war;
module.exports.edit = edit;
module.exports.spanish = spanish;
module.exports.ip = ip;
