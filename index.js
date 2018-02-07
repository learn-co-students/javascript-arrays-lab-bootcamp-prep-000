const app = "I don't do much."
var kittens = []
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}
function appendKitten(name) {
  var array = [...kittens,name]
  return array
}
function prependKitten(name) {
  var array = [name,...kittens]
  return array
}
function removeLastKitten(name) {
  var array = kittens.slice(0, kittens.length - 1)
  return array
}
function removeFirstKitten(name) {
  var array = kittens.slice(1)
  return array
}