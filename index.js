const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(kitName) {
kittens.push(kitName);
  return kittens
}
function destructivelyPrependKitten(kitName) {
kittens.unshift(kitName);
  return kittens
}
function destructivelyRemoveLastKitten() {
kittens.pop();
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}
function appendKitten(kitName) {
  return [...kittens, kitName]
}
function prependKitten(kitName) {
  return [kitName, ...kittens]
}
function removeLastKitten() {
  //var newArray = kittens.pop();
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}
