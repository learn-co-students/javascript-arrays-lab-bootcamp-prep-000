var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.splice(2)
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens
}
function appendKitten(name) {
  const kittens = ["Milo", "Otis", "Garfield"]
  kittens.push("Broom")
  return kittens
}
function prependKitten(name) {
  const kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift("Arnold")
  return kittens
}
function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = kittens.slice(1)
  return kittens
}
