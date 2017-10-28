const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

//changes array
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name);
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

//new arrays
function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}
function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}
function removeLastKitten() {
  var newKittens = kittens.slice(0, -1)
  return newKittens
}
function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens
}
