var kittens = ["Milo", "Otis", "Garfield"] //define your array here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten () {
 kittens.shift()
}
function appendKitten (name) {
  var newKittens = [...kittens, name]
  return newKittens
}
function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}
function removeLastKitten() {
  var newKittens = kittens.slice(0,2)
  return newKittens
}
function removeFirstKitten(){
  var newKittens = kittens.slice(1)
  return newKittens
}
// Add your functions and code here
