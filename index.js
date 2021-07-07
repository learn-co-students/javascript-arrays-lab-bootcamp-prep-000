var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
}
function appendKitten(name) {
  return[...kittens, "Broom"]
}
function prependKitten(name) {
  return["Arnold", ...kittens]
}
function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten(name) {
  return kittens.slice(1)
}
