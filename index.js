const app = "I don't do much."
var kittens = ["milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}
function appendKitten (name) {
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}
function prependKitten(name) {
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
}
function removeLastKitten() {
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}
function removeFirstKitten() {
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
}