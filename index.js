const app = "I don't do much."
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function prependKitten(name) {
  return [name, ...kittens]
}
function appendKitten(name) {
  return [...kittens, name]
}
function removeFirstKitten() {
  return kittens.slice(1)
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}