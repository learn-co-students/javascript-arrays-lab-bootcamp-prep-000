var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var name = "Ralph"
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  var name = "Bob"
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  return kittens.pop(name)
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift(name)
}
function appendKitten(name) {
  var name = "Broom"
  return [...kittens, name]
}
function prependKitten(name){
  var name = "Arnold"
  return [name, ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}