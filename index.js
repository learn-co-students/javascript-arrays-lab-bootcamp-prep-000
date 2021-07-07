
var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name) {
  var newKittens = [...kittens,name];
  return newKittens;
}
function prependKitten(name) {
  var cuteKittens = [name,...kittens];
  return cuteKittens;
}
function removeLastKitten(){
  var superKittens = kittens.slice(0,2);
  return superKittens;
}
function removeFirstKitten(){
  var bestKittens = kittens.slice(1);
  return bestKittens;
}
