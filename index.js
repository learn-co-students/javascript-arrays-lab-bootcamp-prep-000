var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function kittens (){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens;
}
  
function destructivelyAppendKitten() {
  console.log(kittens.push("Ralph"));
  return kittens;

}
function destructivelyPrependKitten () {
  console.log(kittens.unshift('Bob'));
  return kittens;
}

function destructivelyRemoveLastKitten() {
  console.log(kittens.pop("Garfield"));
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  console.log(kittens.shift("Milo"));
  return kittens;
}


function appendKitten() {
 var newkittens = kittens.concat(["Broom"]);
 console.log(newkittens);
 return newkittens;
}


var kittens = ["Milo", "Otis", "Garfield"];
function removeLastKitten() {
   var newkittens = kittens.slice(-0,2);
 console.log(newkittens);
 return newkittens;
}

var kittens = ["Milo", "Otis", "Garfield"];
function removeFirstKitten() {
   var newkittens = kittens.slice(-2);
 console.log(newkittens);
 return newkittens;
}

var kittens = ["Milo", "Otis", "Garfield"];
function prependKitten() {
const newkittens = ['Arnold',...kittens];

return newkittens;


}
