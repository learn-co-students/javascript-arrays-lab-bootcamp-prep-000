const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens
}
function appendKitten(name) {
  var newKittens = [...kittens];
  newKittens.push("Broom")
  return newKittens
}
function prependKitten(name) {
  var newKittens = [...kittens];
  newKittens.unshift("Arnold");
  return newKittens
}
function removeLastKitten() {
  var newKittens = [...kittens];
  newKittens.pop();
  return newKittens
}
function removeFirstKitten() {
  var newKittens = [...kittens];
  newKittens.shift();
  return newKittens
}
