const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
  kittens.push ("Ralph");
  return kittens;
}
function destructivelyPrependKitten(){
  kittens.unshift ("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(){
  var kitten = [...kittens, "Broom"];
  return kitten;
}
function prependKitten(){
  var kitten = ["Arnold", ...kittens];
  return kitten;
}
function removeLastKitten(array){
  var kitten = kittens.slice(0, kittens.length-1);
  return kitten;
}
function removeFirstKitten(array){
  var kitten = kittens.slice(1);
  return kitten;
}
