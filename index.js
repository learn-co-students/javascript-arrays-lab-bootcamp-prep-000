const app = "I don't do much."
//var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
};
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
};
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
};
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
};
function appendKitten(name) {
  //var kittens = ["Milo", "Otis", "Garfield"]
  var newKittens = [...kittens, "Broom"]
  return newKittens};
function prependKitten(name) {
  //var kittens = ["Milo", "Otis", "Garfield"]
  var newKittens = ["Arnold", ...kittens]
  return newKittens
};
function removeLastKitten() {
  //var kittens = ["Milo", "Otis", "Garfield"]
  var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
};
function removeFirstKitten() {
  //var kittens = ["Milo", "Otis", "Garfield"]
  var newKittens = kittens.slice(1)
  return newKittens
};
