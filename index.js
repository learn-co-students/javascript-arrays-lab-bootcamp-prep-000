var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens = kittens.slice(0, kittens.length - 1)
}
function destructivelyRemoveFirstKitten() {
  kittens = kittens.slice(1, kittens.length)
}
function appendKitten(name) {
  return [...kittens, name]
}
function prependKitten(name) {
  return [name,...kittens]
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  return kittens.slice(1, kittens.length)
}