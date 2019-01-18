let realm = require("realm");
let data;

const ZiviSchema = {
  name: "zivi",
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
  name: "kaffee",
  properties : {
    id: "int",
    art: "string",
    anzahl: "int"
  }
};

const QuoteSchema = {
  name: "quote",
  properties: {
    id: "int",
    quote: "string"
  }
};

Realm.open({schema: [ZiviSchema, KaffeeSchema, QuoteSchema]})
  .then(realm => {
    // ... use the realm instance to read and modify data
  })
  .catch(error => {
    console.error(error);
  });

function getData(){
  try {
    data = db.getData("/");
  } catch(err) {
    console.error(err);
  }
}

function readRandomQuoteDB() {
  getData();
  try {
    let quotes = data.quotes;
    let rnd = Math.round(Math.random() * (quotes.length+1));
    return quotes[rnd].quote;
  } catch(err) {
    console.error(err);
  }
}

function newQuoteDB(quote) {
  db.push("/quotes", {
    id: data.quotes.length+1,
    quote: quote
  }, false);
}

function readZivisDB() {
  getData();
  return data.zivis;
}

function updateZiviDB(name, image, id) {
  getData();
  console.log(data.zivis);
  console.log(id);
  // db.push("/zivis", {
  //   name: name,
  //   id: id,
  //   image: image
  // }, false);
  //
  // let sql = "UPDATE zivis SET name='" + name + "', bild='" + image + "' WHERE id=?";
  // con.query(sql, id, function(err, result) {});
}

function newZiviDB() {
  let spanish = ["Santiago", "Sebastián", "Matías", "Mateo", "Nicolás", "Alejandro", "Diego", "Samuel", "Benjamín", "Daniel", "Joaquín", "Lucas", "Tomas", "Gabriel", "Martín", "David", "Emiliano", "Jerónimo", "Emmanuel", "Agustín", "Juan Pablo", "Juan José", "Andrés", "Thiago", "Leonardo", "Felipe", "Ángel", "Maximiliano", "Christopher", "Juan Diego", "Adrián", "Pablo", "Miguel Ángel", "Rodrigo", "Alexander", "Ignacio", "Emilio", "Dylan", "Bruno", "Carlos", "Vicente", "Valentino", "Santino", "Julián", "Juan Sebastián", "Aarón", "Lautaro", "Axel", "Fernando", "Ian", "Christian", "Javier", "Manuel", "Luciano", "Francisco", "Juan David", "Iker", "Facundo", "Rafael", "Alex", "Franco", "Antonio", "Luis", "Isaac", "Máximo", "Pedro", "Ricardo", "Sergio", "Eduardo", "Bautista", "Miguel", "Cristóbal", "Kevin", "Jorge", "Alonso", "Anthony", "Simón", "Juan", "Joshua", "Diego Alejandro", "Juan Manuel", "Mario", "Alan", "Josué", "Gael", "Hugo", "Matthew", "Ivan", "Damián", "Lorenzo", "Juan Martín", "Esteban", "Álvaro", "Valentín", "Dante", "Jacobo", "Jesús", "Camilo", "Juan Esteban", "Elías"];
  let colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"];
  let name = "Hans Günter von Anderswo";
  let image = "images/fish.jpg";
  try {
    db.push("/zivis[]", {
      "name": name,
      "spanish": spanish[Math.floor(Math.random() * spanish.length)],
      "bild": image,
      "farbe": colors[Math.floor(Math.random() * colors.length)]
    }, false);
  } catch(err) {
    console.error(err);
  }
}
//
function killZiviDB(id) {
  console.log(data.zivis.filter(el => el.id == id));
//   let sql = "UPDATE zivis SET dead=1 WHERE id=?";
//   con.query(sql, id, (err, result) => {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
}

function readCoffeeDB(){
  getData();
  return data.kaffee;
}


function addCoffeeDB(id){
  console.log(id);
  console.log(data.kaffee.filter(el => el.id == id));
  const item = data.kaffee.filter(el => el.id == id);
  try {
    db.push(`/kaffee[${id-1}]`, {
      "id": item.id,
      "anzahl": item.anzahl++
    }, false);
  } catch(err) {
    console.error(err);
  }

//   let sql = "UPDATE kaffee SET anzahl = anzahl + 1 WHERE c_id = ?";
//   con.query(sql, id, (err, res) => {
//     if (err) throw err;
//     console.log("Number of records inserted: " + res.affectedRows);
//   })
}







// let jsonDB = require("node-json-db");
// let db = new jsonDB("./db/database");
// let data;
//
// function getData(){
//   try {
//     data = db.getData("/");
//   } catch(err) {
//     console.error(err);
//   }
// }
//
// function readRandomQuoteDB() {
//   getData();
//   try {
//     let quotes = data.quotes;
//     let rnd = Math.round(Math.random() * (quotes.length+1));
//     return quotes[rnd].quote;
//   } catch(err) {
//     console.error(err);
//   }
// }
//
// function newQuoteDB(quote) {
//   db.push("/quotes", {
//     id: data.quotes.length+1,
//     quote: quote
//   }, false);
// }
//
// function readZivisDB() {
//   getData();
//   return data.zivis;
// }
//
// function updateZiviDB(name, image, id) {
//   getData();
//   console.log(data.zivis);
//   console.log(id);
//   // db.push("/zivis", {
//   //   name: name,
//   //   id: id,
//   //   image: image
//   // }, false);
//   //
//   // let sql = "UPDATE zivis SET name='" + name + "', bild='" + image + "' WHERE id=?";
//   // con.query(sql, id, function(err, result) {});
// }
//
// function newZiviDB() {
//   let spanish = ["Santiago", "Sebastián", "Matías", "Mateo", "Nicolás", "Alejandro", "Diego", "Samuel", "Benjamín", "Daniel", "Joaquín", "Lucas", "Tomas", "Gabriel", "Martín", "David", "Emiliano", "Jerónimo", "Emmanuel", "Agustín", "Juan Pablo", "Juan José", "Andrés", "Thiago", "Leonardo", "Felipe", "Ángel", "Maximiliano", "Christopher", "Juan Diego", "Adrián", "Pablo", "Miguel Ángel", "Rodrigo", "Alexander", "Ignacio", "Emilio", "Dylan", "Bruno", "Carlos", "Vicente", "Valentino", "Santino", "Julián", "Juan Sebastián", "Aarón", "Lautaro", "Axel", "Fernando", "Ian", "Christian", "Javier", "Manuel", "Luciano", "Francisco", "Juan David", "Iker", "Facundo", "Rafael", "Alex", "Franco", "Antonio", "Luis", "Isaac", "Máximo", "Pedro", "Ricardo", "Sergio", "Eduardo", "Bautista", "Miguel", "Cristóbal", "Kevin", "Jorge", "Alonso", "Anthony", "Simón", "Juan", "Joshua", "Diego Alejandro", "Juan Manuel", "Mario", "Alan", "Josué", "Gael", "Hugo", "Matthew", "Ivan", "Damián", "Lorenzo", "Juan Martín", "Esteban", "Álvaro", "Valentín", "Dante", "Jacobo", "Jesús", "Camilo", "Juan Esteban", "Elías"];
//   let colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"];
//   let name = "Hans Günter von Anderswo";
//   let image = "images/fish.jpg";
//   try {
//     db.push("/zivis[]", {
//       "name": name,
//       "spanish": spanish[Math.floor(Math.random() * spanish.length)],
//       "bild": image,
//       "farbe": colors[Math.floor(Math.random() * colors.length)]
//     }, false);
//   } catch(err) {
//     console.error(err);
//   }
// }
// //
// function killZiviDB(id) {
//   console.log(data.zivis.filter(el => el.id == id));
// //   let sql = "UPDATE zivis SET dead=1 WHERE id=?";
// //   con.query(sql, id, (err, result) => {
// //     if (err) throw err;
// //     console.log("Number of records inserted: " + result.affectedRows);
// //   });
// }
//
// function readCoffeeDB(){
//   getData();
//   return data.kaffee;
// }
//
//
// function addCoffeeDB(id){
//   console.log(id);
//   console.log(data.kaffee.filter(el => el.id == id));
//   const item = data.kaffee.filter(el => el.id == id);
//   try {
//     db.push(`/kaffee[${id-1}]`, {
//       "id": item.id,
//       "anzahl": item.anzahl++
//     }, false);
//   } catch(err) {
//     console.error(err);
//   }
//
// //   let sql = "UPDATE kaffee SET anzahl = anzahl + 1 WHERE c_id = ?";
// //   con.query(sql, id, (err, res) => {
// //     if (err) throw err;
// //     console.log("Number of records inserted: " + res.affectedRows);
// //   })
// }

module.exports.readRandomQuoteDB = readRandomQuoteDB;
module.exports.newQuoteDB = newQuoteDB;
module.exports.readZivisDB = readZivisDB;
module.exports.updateZiviDB = updateZiviDB;
module.exports.newZiviDB = newZiviDB;
module.exports.killZiviDB = killZiviDB;
module.exports.addCoffeeDB = addCoffeeDB;
module.exports.readCoffeeDB = readCoffeeDB;
//$quote="Das ist ein Zitat, dass ein Zitat darstellen soll, da gerade kein Zitat vorhanden ist.";
