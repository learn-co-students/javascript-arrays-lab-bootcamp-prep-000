const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten () {
  kittens.push("Ralph")
}
function destructivelyPrependKitten () {
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten () {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  const moreKittens = [...kittens, "Broom"]
  return moreKittens
}
function prependKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  const moreKittens = ["Arnold", ...kittens]
  return moreKittens
}
function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}
function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  const newKittens = kittens.slice(1)
  return newKittens
}
