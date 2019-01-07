var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];
//GOOD ABOVE

function destructivelyAppendKitten(name) {
  kittens.push(name);
   return kittens;
}
//GOOD ABOVE

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
//GOOD ABOVE

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
//GOOD ABOVE

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
//GOOD ABOVE

function appendKitten(name) {
  return [...kittens, name];
}
//GOOD ABOVE

function prependKitten(name) {
  return [name, ...kittens];
}
//GOOD ABOVE

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray;
}








