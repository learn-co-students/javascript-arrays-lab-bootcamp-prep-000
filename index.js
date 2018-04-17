const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

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
  var nKittens = [...kittens, name]
  return nKittens
}

function prependKitten(name) {
  var nKittens = [name,...kittens]
  return nKittens
}

function removeLastKitten() {
  var nKittens = kittens.slice(0,kittens.length -1)
  return nKittens
}

function removeFirstKitten() {
  var nKittens = kittens.slice(1,kittens.length)
  return nKittens
}

/*
["Philadelphia", ...cities]
*/