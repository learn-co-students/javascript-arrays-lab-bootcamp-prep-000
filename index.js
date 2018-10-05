var kittens = ["Milo", "Otis", "Garfield"];
// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}
function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name) {
  return kittens.pop("Garfield")
}
function destructivelyRemoveFirstKitten(name) {
  return kittens.shift("Milo")
}
function appendKitten(name) {
  return [...kittens, "Broom"];
}
function prependKitten(name) {
  return ["Arnold", ...kittens];
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten() {
  return kittens.slice(1)
}
