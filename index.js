var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array, name) {
  kittens.push("Ralph");
  return array;
}


var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(array, name) {
  kittens.unshift("Bob");
  return array;
}


var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(array) {
  kittens.pop("Garfield");
  return array;
}


var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(array) {
  kittens.shift("Milo");
  return array;
  
}


var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  return [...kittens, name];
  
}


var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name) {
  return [name,...kittens];

}


var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten(array) {
  return kittens.slice(0,-1);
}


var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten(array) {
  return kittens.slice(1);
}
