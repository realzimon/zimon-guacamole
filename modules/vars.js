const ziviTemplate = "<div class='col-md-2' id='zivi0'><div class='card mb-2 box-shadow'><img id='ziviimage' class='card-img-top' src='fisch.jpg' alt='Card image cap'><div id='zivibg' class='card-body'><p class='card-text text-light h4' id='ziviname'>ZiviName2</p></div></div></div>";
const ziviEditTemplate = "<div class='col-md-2' id='zivi0'><div class='card mb-2 box-shadow'><input type='hidden' id='inputId' value='0'><input type='text' id='inputName' class='form-control' placeholder='Zivi name' required autofocus><label for='inputSpanish' class='sr-only'>Spanish name</label><input type='text' id='inputPassword' class='form-control' placeholder='El pedro' readonly><label for='inputImage'class='sr-only'>Image</label><input type='text' id='inputImage' class='form-control' placeholder='image/'><button class='btn btn-lg btn-primary btn-block zivibutton'>Edit</button></div></div>";
const ziviEditButton = "<div class='col-md-2' id='zivi0'><div class='card mb-2 box-shadow'><button class='btn btn-lg btn-warning btn-block' id='new'>New Zivi</button><button class='btn btn-lg btn-danger btn-block' id='exit'>Exit</button></div></div>";
const warTemplate = "WAR"

const quoteTemplate = "<p class='lead' id='quote'>Das ist ein Zitat, dass ein Zitat darstellen soll, da gerade kein Zitat vorhanden ist.</p>";
const quoteEditTemplate = "<div class='form-group mx-sm-3 mb-2' id='quote0'><input type='hidden' id='quoteId'><input type='text' id='q' class='form-control' placeholder='Das ist 1 neues Quote'><button class='btn btn-primary mb-2'>Speichern</button></div>";
const quoteNewTemplate = "<button class='btn btn-primary mb-2' id='newquote'>New Quote</button>";


var zivis;
var end;
var spanish = false;
var edit = false;
var war=false;

const fladeAddress="https://www.fladerei.com/dyn_inhalte/tagesflade.html";
const ip = "http://localhost:9009/zimon/database/";

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

function getWar(){
  return war;
}
function setWar(w){
  war=w;
}
