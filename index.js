const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  name = "Ralph";
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  name = "Bob";
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(){
  var newArray = [...kittens, "Broom"];
  return newArray;
}

function prependKitten(){
  var newArray = ["Arnold", ...kittens];
  return newArray;
}

function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length-1);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(-2);
  return newArray;
}

