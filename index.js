const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(Ralph) {
  kittens.push ("Ralph")
  return kittens;
}
function destructivelyPrependKitten(Bob) {
  kittens.unshift("Bob")
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop(2)
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens;
}
function appendKitten(Broom) {
  var addKitten = [...kittens, "Broom"]
  return addKitten;
}
function prependKitten(Arnold) {
  var addKitten = ["Arnold", ...kittens]
  return addKitten;
}
function removeLastKitten() {
  var removeKitten = kittens.slice(0, kittens.length - 1)
  return removeKitten;
}
function removeFirstKitten() {
  var removeKitten = kittens.slice(1)
  return removeKitten;
}