var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
return kittens.push(name);
}

var kittens = ["Milo", "Otis", "Garfield"] //resetting array

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

var kittens = ["Milo", "Otis", "Garfield"] //resetting array

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}

var kittens = ["Milo", "Otis", "Garfield"] //resetting array

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name);
}
var kittens = ["Milo", "Otis", "Garfield"] //resetting array

function appendKitten(name){
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name){
  var newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten(name){
  var newKittens = kittens.slice(0, -1);
  return newKittens;
}

function removeFirstKitten(name){
  var newKittens = kittens.slice(1);
  return newKittens;
}