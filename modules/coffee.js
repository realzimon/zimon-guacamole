const cremaLength = 248.68;
const espressoLength = 39.7887;

function addCoffee(){
    if (Vars.coffee === 6) {
        Coffee.clearCoffee();
    }
    $("#coffee").children().eq(Vars.coffee).addClass('op-1');
    Vars.coffee++;
}

function clearCoffee(){
    for(let i=0; i<6; i++){
        console.log($("#coffee").children());
        $("#coffee").children().eq(i).removeClass('op-1');
    }
    Vars.coffee=0;
}

function readCoffee(){
    mysqlService.readCoffeeDB(res => {
        let coffee = res;
        coffee.forEach(item => {
          $("<li />", {
              text: item.art + ": " + item.anzahl
          }).appendTo("#coffee-stats ul");
        })
        // for(let i=0;i<coffee.length;i++){
        //     $("<li />", {
        //         text: coffee[i].art + ": " + coffee[i].anzahl
        //     }).appendTo("#coffee-stats ul");
        // }

        calculateMileage(coffee);
    });
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

    // for(let i=0;i<coffee.length;i++){
    //     switch(coffee[i].c_id){
    //         case 1:
    //             mileage += cremaLength * coffee[i].anzahl;
    //         break;
    //         case 2:
    //             mileage += espressoLength * coffee[i].anzahl;
    //         break;
    //         case 3:
    //             mileage += espressoLength * coffee[i].anzahl * 2;
    //         break;
    //     }
    // }
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
