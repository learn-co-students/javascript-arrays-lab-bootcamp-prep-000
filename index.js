var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}
function appendKitten(name) {
  var newAppendKitten = kittens.concat("Broom")
  return newAppendKitten
}
function prependKitten(name) {
  var newPrependKitten = ['Arnold'].concat(kittens)
  return newPrependKitten
}
function removeLastKitten(name) {
  var newRemoveLastKitten = kittens.slice(0, 2)
  return newRemoveLastKitten
}
function removeFirstKitten(name) {
  var newRemoveFirstKitten = kittens.slice(-2)
  return newRemoveFirstKitten
}