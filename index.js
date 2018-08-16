// Add your functions and code here
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  var temp = [name]
  kittens = kittens.concat(temp)
  return kittens
}
function destructivelyPrependKitten(name) {
  var temp = [name]
  kittens = temp.concat(kittens)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens = kittens.slice(0,kittens.length-1)
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens = kittens.slice(1,kittens.length)
  return kittens
}
function appendKitten(name) {
  var temp = [name]
  return kittens.concat(temp)
}
function prependKitten(name) {
  var temp = [name]
  return temp.concat(kittens)
}
function removeLastKitten() {
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten() {
  return kittens.slice(1,kittens.length)
}