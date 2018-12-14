let beans = 0;

function addCoffee(){
    if (beans === 6) {
        Coffee.clearCoffee();
    }
    $("#coffee").children().eq(beans).addClass('op-1');
    beans++;
}

function clearCoffee(){
    for(let i=0; i<6; i++){
        $("#coffee").children().eq(i).removeClass('op-1');
    }
    beans = 0;
}

function readCoffee(){
    mysqlService.readCoffeeDB(res => {
        let coffee = res;
        coffee.forEach(item => {
          $("<li />", {
              text: item.art + ": " + item.anzahl
          }).appendTo("#coffee-stats ul");
        });

        calculateMileage(coffee);
    });
}

function calculateMileage(coffee){
    let mileage = 0;
    coffee.forEach(item => {
      switch(item.c_id){
          case 1:
              mileage += Config.cafeCremaLength * item.anzahl;
              break;
          case 2:
              mileage += Config.espressoLength * item.anzahl;
              break;
          case 3:
              mileage += Config.espressoLength * item.anzahl * 2;
              break;
      }
    });

     $("#coffee-km").text(Math.round(mileage)/100 + " m");
}

function drinkCoffee(art){
    addCoffee();
    mysqlService.addCoffeeDB(art);
    $("#coffee-stats ul").empty();
    readCoffee();
}

module.exports.addCoffee = addCoffee;
module.exports.clearCoffee = clearCoffee;
module.exports.drinkCoffee = drinkCoffee;
module.exports.readCoffee = readCoffee;
