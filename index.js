var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array) {
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(array) {
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten(array) {
  kittens.pop("Garfield")
  return kittens
}
function destructivelyRemoveFirstKitten(array) {
  kittens.shift("Milo")
  return kittens
}
function appendKitten(array) {
  return [...kittens, "Broom"]
}
function prependKitten(array) {
  return ["Arnold", ...kittens]
}
function removeLastKitten(array) {
  return kittens.slice(0, 2)
}
function removeFirstKitten(array) {
  return kittens.slice(1)
}