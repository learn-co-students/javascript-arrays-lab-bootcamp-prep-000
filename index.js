
var kittens = ["Milo", "Otis", "Garfield"];

function arrays() {
  return kittens
}

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens
}


function destructivelyRemoveLastKitten() {
  kittens.pop(2);
  return kittens
}

 
function destructivelyRemoveFirstKitten() {
  kittens.shift(1);
  return kittens
}
 

function appendKitten(name) {
  return [...kittens, name];
}

 
function prependKitten(name) {
  return [name, ...kittens];
}
  


function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}


function removeFirstKitten() {
  return kittens.slice(1);
}

 
