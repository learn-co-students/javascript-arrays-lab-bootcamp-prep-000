var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens.push("Ralph")
  return kittens
}
function destructivelyRemoveLastKitten(Garfield) {
  kittens.pop("Garfield")
  return kittens
}
function destructivelyPrependKitten(Bob) {
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveFirstKitten(Milo) {
  kittens.shift("Milo")
  return kittens
}
function appendKitten(Broom) {
var newKittens =  [...kittens, "Broom"]
  return newKittens
}
function prependKitten(Arnold) {
  var newKittens = ["Arnold", ...kittens]
  return newKittens
}
function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length-1)
return newKittens
}
function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}
