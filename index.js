const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push('Ralph');
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten(){
  kittens.pop();
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name){
  appendKitten = [...kittens, "Broom"];
  return appendKitten;
}

var kittens = ["Milo", "Otis", "Garfield"]
function prependKitten(name){
  prependKitten = ["Arnold", ...kittens];
  return prependKitten;
}

var kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten(){
  removeLastKitten = kittens.slice(0, kittens.length-1);
  return removeLastKitten;
}

var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten(){
  removeFirstKitten = kittens.slice(1);
  return removeFirstKitten;
}
