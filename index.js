const app = "I don't do much."
function destructivelyAppendKitten() {
  kittens.push("Ralph")
}
function destructivelyPrependKitten() {
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten() {
  kittens.splice(-1)
}
function destructivelyRemoveFirstKitten() {
  kittens.splice(0, 1)
}
function appendKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield']
  var newkittens = [...kittens, "Broom"]
  return newkittens
}
function prependKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield']
  var newkittens = ["Arnold", ...kittens]
  return newkittens
}
function removeLastKitten() {
  var newkittens = kittens.slice(0, -1)
  return newkittens
}
function removeFirstKitten() {
  var newkittens = kittens.slice(1)
  return newkittens
}
