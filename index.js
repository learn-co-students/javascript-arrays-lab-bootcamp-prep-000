const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten() {
return [...kittens, "Broom"]
}
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function prependKitten(name) {
  return [name, ...kittens]
}
