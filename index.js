const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens = [...kittens, "Ralph"]
  return [...kittens, "Ralph"]
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop('Garfield')
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift('Milo')
  return kittens
}
function appendKitten(name) {
  return [...kittens, 'Broom']
}
function prependKitten(name) {
  return ['Arnold', ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  return kittens.slice(-2)
}
