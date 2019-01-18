let realm = require("realm");

const ZiviSchema = {
  name: "Zivi",
  properties: {
    id: "int",
    name: "string",
    spanish: "string",
    bild: "string",
    farbe: "string",
    dead: "int?",
    antritt: "date"
  }
};

const KaffeeSchema = {
  name: "Kaffee",
  properties : {
    id: "int",
    art: "string",
    anzahl: "int"
  }
};

const QuoteSchema = {
  name: "Quote",
  properties: {
    id: "int",
    quote: "string"
  }
};

realm.write(() => {
  //insert current zivis
  realm.create('Zivi', {id: 1, name: 'Kyrillus', spanish: "Matthew", bild: "images/kyrillus.jpg", farbe: "#ffc107", dead: 0, antritt: "2018-07-01 00:00:00"});
  realm.create('Zivi', {id: 2, name: 'Max', spanish: "Thiago", bild: "images/max2.jpg", farbe: "#9c27b0", dead: 0, antritt: "2018-07-01 00:00:00"});
  realm.create('Zivi', {id: 3, name: 'Lukas', spanish: "Lorenzo", bild: "images/dominik.jpg", farbe: "#ff0090", dead: 0, antritt: "2018-11-01 00:00:00"});
  realm.create('Zivi', {id: 4, name: 'Dominik', spanish: "Igncio", bild: "images/lukas2.jpg", farbe: "#e91e63", dead: 0, antritt: "2018-11-01 00:00:00"});

  //insert Kaffeestats
  realm.create("Kaffee", {id: 1, art: "Espresso", anzahl: 20});
  realm.create("Kaffee", {id: 2, art: "Caffè Crema", anzahl: 79});
  realm.create("Kaffee", {id: 3, art: "Doppio", anzahl: 3});

  //insert Quotes
  realm.create("Quote", {id: 1, quote: "Sorry not sorry"});
  realm.create("Quote", {id: 2, quote: "Wenn sich zwei streiten, machts der Daniel"});
  realm.create("Quote", {id: 3, quote: "We need more Zivis!"});
  realm.create("Quote", {id: 4, quote: "Wenns ihr zu lange Quotetexte schreibt, dann bekommen alle Augenkrebs also pls not machen"});
  realm.create("Quote", {id: 5, quote: "Daniel machts"});
  realm.create("Quote", {id: 6, quote: "This is fine.gif"});
  realm.create("Quote", {id: 7, quote: "C ist komplex und C++ ist kompliziert"});
  realm.create("Quote", {id: 8, quote: "Wo ist Philips? Gleich neben Siemens"});
  realm.create("Quote", {id: 9, quote: "404 quote not found"});
  realm.create("Quote", {id: 10, quote: "Thomas kauft!"});
  realm.create("Quote", {id: 11, quote: "Schaf bleibt Schaf und wird nicht Kuh"});
  realm.create("Quote", {id: 12, quote: "Hab nur gschaut!"});
  realm.create("Quote", {id: 13, quote: "I schau nur!"});
  realm.create("Quote", {id: 14, quote: "ZiGe: Zivi-Gewerkschaft"});
  realm.create("Quote", {id: 15, quote: "Wenn niemand was sagt, is Peter drin!"});
  realm.create("Quote", {id: 16, quote: "Wo warst du essen. Für die Statistik"});
  realm.create("Quote", {id: 17, quote: "Is eh warm drinnen, warum gemma raus?"});
  realm.create("Quote", {id: 18, quote: "Da hinten liegt ein VGA zu Ethernet Adapter"});
  realm.create("Quote", {id: 19, quote: "Order 66 is active."});
  realm.create("Quote", {id: 20, quote: "Chrome still in shitty nutshell"});
  realm.create("Quote", {id: 21, quote: "Debian, die Paketnazis"});
  realm.create("Quote", {id: 22, quote: "Mit mir gibt's keine Party"});
  realm.create("Quote", {id: 23,quote: "Hol ma uns a Eis?"});
  realm.create("Quote", {id: 24,quote: "Detektive, jetzt seid ihr gefragt!"});
  realm.create("Quote", {id: 25, quote: "Bundescyberministerium"});
  realm.create("Quote", {id: 26,quote: "Ich bin innerlich schon in Pension"});
  realm.create("Quote", {id: 27, quote: "POLIZEI LASSENS UNS BITTE REIN"});
  realm.create("Quote", {id: 28, quote: "BAKS hacken dauert nicht lange"});
  realm.create("Quote", {id: 29, quote: "Was die Eltern nicht tun, muss der Chefzivi machen..."});
  realm.create("Quote", {id: 30, quote: "Sharing is caring!"});
  realm.create("Quote", {id: 31, quote: "Michael du bist eher so der Flex-Typ"});
  realm.create("Quote", {id: 32, quote: "Ich bekomm keinen neuen Monitor, nur einen neuen Bildschirm."});
  realm.create("Quote", {id: 33, quote: "Der Katalysator für Wasser ist H2O."});
  realm.create("Quote", {id: 34, quote: "Nur weil Sie hineingefahren sind, heißt das nicht, dass Sie eine Einfahrtsgenehmigung haben"});
  realm.create("Quote", {id: 35, quote: "Ist das das ein 6Taxi?"});
  realm.create("Quote", {id: 36, quote: "Eine Länge ist etwas physisches. Ein Kilometerstand nicht."});
  realm.create("Quote", {id: 37, quote: "Du musst einfach warten, bis sich die Falten entfalten."});
  realm.create("Quote", {id: 38, quote: "Bei dem Ding ist einfach zu wenig Loch und zu viel Gitter."});
  realm.create("Quote", {id: 39, quote: "Das Tape ist gerade weggeflogen und befindet sich irgendwo im Schneemann..."});

  // Update book with new price keyed off the id
  //realm.create('Book', {id: 1, price: 55}, true);
});
