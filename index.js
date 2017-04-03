const app = "I don't do much."
var kittens = [];
function destructivelyAppendKitten(element) {
  return kittens.push(element);
}
function destructivelyPrependKitten(element) {
  return kittens.unshift(element)
}
function destructivelyRemoveLastKitten(element) {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(element) {
  return kittens.shift();
}
function appendKitten(name) {
  return [...kittens,name]  //code to attach element at the end of array w/o harming original array//
}
function prependKitten(name) {
  return [name,...kittens]  //code to attach element at the beginning of array w/o harming original array//
}
function removeLastKitten(name) {
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(name) {
  return kittens.slice(1)
}
