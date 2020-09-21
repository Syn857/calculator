// prompt first for rain fall
var user = prompt("How many inches of rain fell?");
var number = Number(user);
var input = user.repeat(number);
var rep = input.replace(input, '*');
var repv = rep.repeat(number);

//default value for grain
var grain = -50;

//function to calculate the amount of rain
function rainFall() {
  var rainInches = user;
  if (rainInches > 20) {
   return (((10 / 100) * 50) - grain);
  } else if (rainInches < 10){
   return (((20 / 100) * 50) - grain);
  } else {

  }
}

//fertilizer function
function promptFertilizer() {
 var a = prompt("Did you use fertilizer?");
  if (a === "yes") {
    return typeFertilizer()
  } else if (a === "no") {
    return ("The yield should be ", rainFall(), " bushels per acres.")
  } else {

  }
}

//fertilizer type Function
function typeFertilizer() {
 var b = prompt("Did you use premium or regular fertilizer?");
  if (b === "regular") {
    return (((10 / 100) * user) - grain);
  } else if (b === "premium") {
    return (((15 / 100) * user) - grain);
  }
}

function countAll(){

}

console.log(repv);
rainFall();
promptFertilizer();
