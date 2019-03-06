let mysql = require('mysql');
let con = mysql.createConnection({
  host: Config.dbHost,
  user: Config.dbUser,
  password: Config.dbPassword,
  database: Config.dbName
});

con.connect(function(err) {
  if (err) throw err;
});

function readRandomQuoteDB(callback) {
  con.query("SELECT quote FROM quotes ORDER BY RAND() LIMIT 1", function(err, result) {
    callback(result[0].quote);
  });
}

function newQuoteDB(quote) {
  let sql = "INSERT INTO quotes (quote) VALUES (?)";
  con.query(sql, quote, function(err, result) {});
}

function readZivisDB(callback) {
  con.query("SELECT id, name, spanish, bild, farbe, antritt FROM zivis WHERE dead=0", function(err, result) {
    callback(result);
  });
}

function updateZiviDB(name, image, id, antritt) {
  let sql = "UPDATE zivis SET name='" + name + "', bild='" + image + "', antritt='" + antritt + "' WHERE id=?";
  con.query(sql, id, function(err, result) {});
}

function newZiviDB() {
  let spanish = ["Santiago", "Sebastián", "Matías", "Mateo", "Nicolás", "Alejandro", "Diego", "Samuel", "Benjamín", "Daniel", "Joaquín", "Lucas", "Tomas", "Gabriel", "Martín", "David", "Emiliano", "Jerónimo", "Emmanuel", "Agustín", "Juan Pablo", "Juan José", "Andrés", "Thiago", "Leonardo", "Felipe", "Ángel", "Maximiliano", "Christopher", "Juan Diego", "Adrián", "Pablo", "Miguel Ángel", "Rodrigo", "Alexander", "Ignacio", "Emilio", "Dylan", "Bruno", "Carlos", "Vicente", "Valentino", "Santino", "Julián", "Juan Sebastián", "Aarón", "Lautaro", "Axel", "Fernando", "Ian", "Christian", "Javier", "Manuel", "Luciano", "Francisco", "Juan David", "Iker", "Facundo", "Rafael", "Alex", "Franco", "Antonio", "Luis", "Isaac", "Máximo", "Pedro", "Ricardo", "Sergio", "Eduardo", "Bautista", "Miguel", "Cristóbal", "Kevin", "Jorge", "Alonso", "Anthony", "Simón", "Juan", "Joshua", "Diego Alejandro", "Juan Manuel", "Mario", "Alan", "Josué", "Gael", "Hugo", "Matthew", "Ivan", "Damián", "Lorenzo", "Juan Martín", "Esteban", "Álvaro", "Valentín", "Dante", "Jacobo", "Jesús", "Camilo", "Juan Esteban", "Elías"];
  let colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"];
  let name = "Hans Günter von Anderswo";
  let image = "images/fish.jpg";
  let sql = "INSERT INTO zivis (name, spanish, bild, farbe) VALUES ('" + name + "', '" + spanish[Math.floor(Math.random() * spanish.length)] + "', '" + image + "', '" + colors[Math.floor(Math.random() * colors.length)] + "')";
  con.query(sql, function(err, result) {});
}

function killZiviDB(id) {
  let sql = "UPDATE zivis SET dead=1 WHERE id=?";
  con.query(sql, id, (err, result) => {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
}

function addCoffeeDB(id){
  let sql = "UPDATE kaffee SET anzahl = anzahl + 1 WHERE c_id = ?";
  con.query(sql, id, (err, res) => {
    if (err) throw err;
    console.log("Number of records inserted: " + res.affectedRows);
  })
}

function readCoffeeDB(callback){
  con.query("SELECT c_id, art, anzahl FROM kaffee", (err, res) => callback(res));
}

module.exports.readRandomQuoteDB = readRandomQuoteDB;
module.exports.newQuoteDB = newQuoteDB;
module.exports.readZivisDB = readZivisDB;
module.exports.updateZiviDB = updateZiviDB;
module.exports.newZiviDB = newZiviDB;
module.exports.killZiviDB = killZiviDB;
module.exports.addCoffeeDB = addCoffeeDB;
module.exports.readCoffeeDB = readCoffeeDB;
//$quote="Das ist ein Zitat, dass ein Zitat darstellen soll, da gerade kein Zitat vorhanden ist.";
