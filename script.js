// prompt first for rain fall
var user = prompt("How many inches of rain fell?");
var number = Number(user);
var input = "*".repeat(number);

//default value for grain
var grain = 50;

//function to calculate the amount of rain
function rainFall() {
  var rainInches = user;
  if (rainInches > 20) {
   return ((grain / 100) * 20);
  } else {
   return ((grain / 100) * 10);
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
    return ((grain / 100) * 10);
  } else {
    return ((grain / 100) * 15);
  }
}

function countAll(){

}

console.log(input);
rainFall();
promptFertilizer();
