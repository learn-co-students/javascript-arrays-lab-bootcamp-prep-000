var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  var newKitterns = kittens.concat(name);
  return newKitterns
}

function prependKitten(name) {
  var kitten = [name, ...kittens];
  // kitten = [name];
  // var newKitterns = kitten.concat(kittens);
  return kitten
}

function removeLastKitten() {
  var newKitterns = kittens.slice(0, kittens.length - 1);
  return newKitterns
}
function removeFirstKitten() {
  // var newKitterns = kittens.splice(0, 1);
  
  var newKitterns = kittens.slice(1);
  return newKitterns
}