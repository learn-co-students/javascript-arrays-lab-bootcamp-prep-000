const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array){
kittens.push("Ralph");
}

function destructivelyPrependKitten(array){
kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(array){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(array){
  kittens.shift();
}
function appendKitten(array){
  var newKittens = [...kittens, array];
  return newKittens;
  }

function prependKitten(array){
  var newKitten = [array, ...kittens];
  return newKitten;
}

function removeLastKitten(array){
return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten(array){
  return kittens.slice(1);
}
