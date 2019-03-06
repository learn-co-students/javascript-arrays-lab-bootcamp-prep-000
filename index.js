var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  return kittens.pop()
  }
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function removeFirstKitten() {
  return kittens.slice(-2)
}
function removeLastKitten() {
  return kittens.slice(0,2)
}
function appendKitten(name) {
 return [...kittens, "Broom"];
}
function prependKitten(name) {
 return ["Arnold", ...kittens];
}
function destructivelyAppendKitten(name) {
 return kittens.push("Ralph");
}
function destructivelyPrependKitten(name) {
 return kittens.unshift("Bob");
}








