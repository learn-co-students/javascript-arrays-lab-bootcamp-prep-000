var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens = kittens.slice(0,-1)
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens = kittens.slice(1)
  return kittens
}
function appendKitten(name) {
  return [...kittens, name]
}
function prependKitten(name) {
  return [name, ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0,-1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}