// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return kittens
}
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  var kittens2 = [...kittens, name]
  return kittens2
}
function prependKitten(name) {
  var kittens2 = [name, ...kittens]
  return kittens2
}
function removeLastKitten() {
  var kittens2 = kittens.slice(0, kittens.length - 1)
  return kittens2
}
function removeFirstKitten() {
  var kittens2 = kittens.slice(1)
  return kittens2
}
