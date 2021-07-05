var kittens = [] //define your array here

// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newKittens = [...kittens];
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name){
  var newKittens = [...kittens]
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten() {
  var newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
}


function removeFirstKitten() {
  var newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
}