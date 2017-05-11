const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
};

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
};

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return kittens
};

function appendKitten(name){
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
};

function prependKitten(name) {
  var freshKittens = [...kittens]
  freshKittens.unshift(name)
  return freshKittens
};

function removeLastKitten(name) {
var freshKittens = [...kittens]
freshKittens.pop()
return freshKittens
};

function removeFirstKitten(name) {
  var freshKittens = [...kittens]
  freshKittens.shift()
  return freshKittens
};
