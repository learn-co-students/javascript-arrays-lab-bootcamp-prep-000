var kittens = ["Milo", "Otis", "Garfield"] //define your array here

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
function appendKitten(name) {
  var kittens2 = kittens.concat(name)
  return kittens2
}
function prependKitten(name) {
  var kittens5 = [name].concat(kittens)
  return kittens5
}
function removeLastKitten() {
  var kittens3 = kittens.slice(0, 2)
  return kittens3
}
function removeFirstKitten() {
  var kittens4 = kittens.slice(1)
  return kittens4
}
