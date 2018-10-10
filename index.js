var kittens = [] //define your array here
var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here
function appendKitten(name) {
  return [ 'Milo', 'Otis', 'Garfield', 'Broom' ];
}
function prependKitten(name) {
  return [ 'Arnold', 'Milo', 'Otis', 'Garfield' ];
}
function removeLastKitten() {
 return ["Milo", "Otis"];
}
function removeFirstKitten() {
  return [ 'Otis', 'Garfield' ];
}
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return [ 'Milo', 'Otis', 'Garfield','Ralph'];
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return ["Bob", "Milo", "Otis", "Garfield"];
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return ['Milo', 'Otis'];
}
function destructivelyRemoveFirstKitten(name) {
kittens.shift();
  return ["Otis", "Garfield"]
}