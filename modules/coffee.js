function addCoffee(){
    if (Vars.coffee === 6) {
        Coffee.clearCoffee();
    }
    $("#coffee").children().eq(Vars.coffee).toggleClass('op-25 op-1');
    Vars.coffee++;
}

function clearCoffee(){
    for(let i=0; i<6; i++){
        $("#coffee").children().eq(i).toggleClass('op-1 op-25');
    }
    Vars.coffee=0;
}

module.exports.addCoffee=addCoffee;
module.exports.clearCoffee=clearCoffee;