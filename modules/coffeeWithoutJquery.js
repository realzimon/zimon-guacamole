const cremaLength = 248.68;
const espressoLength = 39.7887;

function addCoffee(){
    if (Vars.coffee === 6) Coffee.clearCoffee();
    console.log(document.querySelector("#coffee").childNodes);
    console.log(Vars.coffee);
    document.querySelector("#coffee").childNodes[Vars.Coffee].classList.remove("op-1");
    // $("#coffee").children().eq(Vars.coffee).addClass('op-1');
    Vars.coffee++;
    console.log(Vars.coffee);
}

function clearCoffee(){
    for(let i=0; i<6; i++){
        console.log($("#coffee").children());
        document.querySelector("#coffee").childNodes[i].classList.remove("op-1");
        //$("#coffee").children().eq(i).removeClass('op-1');
    }
    Vars.coffee=0;
}

function readCoffee(){
    let coffee = Controller.readCoffeeDB();
    coffee.forEach(item => {
      let li = document.createElement("li");
      li.innerHTML = `${item.art} : ${item.anzahl}`;
      document.querySelector("#coffee-stats ul").append(li);
    })

    calculateMileage(coffee);
}

function calculateMileage(coffee){
    let mileage = 0;
    coffee.forEach(item => {
      switch(item.c_id){
          case 1:
              mileage += cremaLength * item.anzahl;
              break;
          case 2:
              mileage += espressoLength * item.anzahl;
              break;
          case 3:
              mileage += espressoLength * item.anzahl * 2;
              break;
      }
    })
    document.querySelector("#coffee-km").text = Math.round(mileage)/100 + " m";
}

function drinkCoffee(art){
    addCoffee();
    Controller.addCoffeeDB(art);
    document.querySelector("#coffee-stats ul").innerHTML = "";
    readCoffee();
}

module.exports.addCoffee = addCoffee;
module.exports.clearCoffee = clearCoffee;
module.exports.drinkCoffee = drinkCoffee;
module.exports.readCoffee = readCoffee;
