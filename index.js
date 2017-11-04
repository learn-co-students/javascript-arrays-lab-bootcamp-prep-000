//1
const app = "I don't do much."
//2
function destructivelyAppendKitten (name) {
  kittens.push(name)
  return kittens
}
//3
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
//4
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}
//5
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}
//6
function appendKitten(name) {
  return [...kittens, name]
}
//7
function prependKitten(name) {
  return [name, ...kittens]
}
//8
function removeLastKitten(name) {
  return kittens.slice(0, length - 1)
}
//
function removeFirstKitten(name) {
  return kittens.slice(1)
}
