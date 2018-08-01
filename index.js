const app = "I don't do much."
var kittens = ["Milo", "Otis", "Grafield"]

function destructivelyAppendKitten (name) {
kittens.push('Ralph');
}

function destructivelyRemoveLastKitten () {
  kittens.pop();
}

function destructivelyPrependKitten () {
  kittens.unshift('Bob');
  }
  
function destructivelyRemoveFirstKitten () {
  kittens.shift();
  
}

function appendKitten (name) {
  var newkittens = kittens.slice(0)
  newkittens.push(name);
  return newkittens;
}

function prependKitten(name) {
  var newkittens = kittens.slice(0)
  newkittens.unshift(name);
  return newkittens;
}

function removeLastKitten () {
  var newkittens = kittens.slice(0)
  newkittens.pop();
  return newkittens;
}

function removeFirstKitten() {
  var newkittens = kittens.slice(0)
  newkittens.shift();
  return newkittens;
}