const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (name) {
 return kittens.push(name)
}
function destructivelyPrependKitten (name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  return kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name)
}

function appendKitten(name) {
  var appendKittenArray = [...kittens];
  appendKittenArray.push(name);
  return appendKittenArray
  }
function prependKitten(name) {
  var prependKittenArray = [...kittens];
  prependKittenArray.unshift(name);
  return prependKittenArray
  }
function removeLastKitten(name) {
  var removeLastKittenArray = [...kittens];
  removeLastKittenArray.pop(name);
  return removeLastKittenArray
}
function removeFirstKitten(name) {
  var removeFirstKittenArray = [...kittens];
  removeFirstKittenArray.shift(name);
  return removeFirstKittenArray
}
