const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"];
  var newKittens1 = kittens.push(name);
  return kittens;
}
function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"];
  var kittens2 = kittens.unshift(name);
  return kittens;
}
function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  var newKittens3 = kittens.pop();
  return kittens;
}
function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"];
  var newKittens4 = kittens.shift();
  return kittens;
}
