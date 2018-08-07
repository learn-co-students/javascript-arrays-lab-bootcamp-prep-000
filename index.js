// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
  var c = [...kittens,name]
  return c
}
function prependKitten(name) {
  var c = [name,...kittens]
  return c
}
function removeLastKitten() {
  var c = kittens.slice(0,2)
  return c
}
function removeFirstKitten() {
  var c = kittens.slice(1)
  return c
}
