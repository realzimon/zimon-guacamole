const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/zimon.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) { console.error(err.message) }
  console.log('Connected to the zimon database.');
});
 
// db.close((err) => {
//   if (err) { console.error(err.message) }
//   console.log('Close the database connection.');
// });

let mysql = require('mysql');
let con = mysql.createConnection({
  host: Config.dbHost,
  user: Config.dbUser,
  password: Config.dbPassword,
  database: Config.dbName
});

function readRandomQuoteDB(callback){
  db.get("SELECT quote FROM quotes ORDER BY RANDOM() LIMIT 1", (err, row) => {
    if (err) return console.error(err.message);
    callback(row.quote);
  });
}

function newQuoteDB(quote){
  let sql = "INSERT INTO quotes (quote) VALUES (?)";
  console.log(quote);
  db.run(sql, [quote], err => {
    if (err) throw err;
  })
}
 
function readZivisDB(callback) {
  db.all("SELECT id, name, spanish, bild, mexiko_bild, farbe, antritt FROM zivis WHERE dead=0", (err, result) => {
    if (err) throw err;
    console.log(result);
    callback(result);
  })
}

function updateZiviDB(name, image, mexican_image, id, antritt){
  console.log(mexican_image);
  let sql = "UPDATE zivis SET name = ?, bild = ?, mexiko_bild = ?, antritt = ? WHERE id = ?";
  let params = [name, image, mexican_image, antritt, id];
  db.run(sql, params, err => {
    if (err) throw err;
  })
}

function newZiviDB(){
  let spanish = ["Naruto", "Santiago", "Sebastián", "Matías", "Mateo", "Nicolás", "Alejandro", "Diego", "Samuel", "Benjamín", "Daniel", "Joaquín", "Lucas", "Tomas", "Gabriel", "Martín", "David", "Emiliano", "Jerónimo", "Emmanuel", "Agustín", "Juan", "Jose", "Juan", "Andrés", "Thiago", "Leonardo", "Felipe", "Ángel", "Maximiliano", "Christopher", "Diego", "Adrián", "Pablo", "Miguel", "Rodrigo", "Alexander", "Ignacio", "Emilio", "Dylan", "Bruno", "Carlos", "Vicente", "Valentino", "Santino", "Julián", "Sebastián", "Aarón", "Lautaro", "Axel", "Fernando", "Ian", "Christian", "Javier", "Manuel", "Luciano", "Francisco", "David", "Iker", "Facundo", "Rafael", "Alex", "Franco", "Antonio", "Luis", "Isaac", "Máximo", "Pedro", "Ricardo", "Sergio", "Eduardo", "Bautista", "Miguel", "Cristóbal", "Kevin", "Jorge", "Alonso", "Anthony", "Simón", "Juan", "Joshua", "Alejandro", "Manuel", "Mario", "Alan", "Josué", "Gael", "Hugo", "Matthew", "Ivan", "Damián", "Lorenzo", "Martín", "Esteban", "Álvaro", "Valentín", "Dante", "Jacobo", "Jesús", "Camilo", "Esteban", "Elías"];
  let colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"];
  let name = "";
  let image = "images/fish.jpg";
  let mexican_image = "images/fish.jpg";
  let antritt = new Date().toISOString().substr(0, 10)
  let sql = "INSERT INTO zivis (name, spanish, bild, mexiko_bild, farbe, antritt) VALUES (?, ?, ?, ?, ?, ?)";
  let params = [name, spanish[Math.floor(Math.random() * spanish.length)], image, mexican_image, colors[Math.floor(Math.random() * colors.length)], antritt];
  console.log(params);
  db.run(sql, params, err => {
    if (err) throw err;
  })
}

function killZiviDB(id){
  let sql = "UPDATE zivis SET dead=1 WHERE id=?";
  db.run(sql, id, err => {
    if (err) throw err;
  })
}

function addCoffeeDB(id){
  let sql = "UPDATE kaffee SET anzahl = anzahl + 1 WHERE c_id = ?";
  db.run(sql, id, err => {
    if (err) throw err;
  })
}

function readCoffeeDB(callback) {
  db.all("SELECT c_id, art, anzahl FROM kaffee", (err, result) => {
    if (err) throw err;
    callback(result);
  })
}

module.exports.readRandomQuoteDB = readRandomQuoteDB;
module.exports.newQuoteDB = newQuoteDB;
module.exports.readZivisDB = readZivisDB;
module.exports.updateZiviDB = updateZiviDB;
module.exports.newZiviDB = newZiviDB;
module.exports.killZiviDB = killZiviDB;
module.exports.addCoffeeDB = addCoffeeDB;
module.exports.readCoffeeDB = readCoffeeDB;