var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(element){
  kittens.push(element);
}
function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(kitten){
  var newKittens = [...kittens,kitten];
  return newKittens;
}
function prependKitten(kitten){
  var newKittens = [kitten,...kittens];
  return newKittens;
}
function removeLastKitten(kitten){
  var newKittens = kittens.slice(0,kittens.length-1);
  return newKittens;
}
function removeFirstKitten(kitten){
  var newKittens = kittens.slice(1);
  return newKittens;
}
