// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  var kittens2 = kittens.push("Ralph");
  return kittens2;
}

function destructivelyPrependKitten(name){
  var kitten3 = kittens.unshift("Bob");
  return kitten3;
}