const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element) {
kittens.push(element)
return kittens
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element)
  return kittens
}

function destructivelyRemoveLastKitten(element) {
  kittens.pop(element)
  return kittens
}
function destructivelyRemoveFirstKitten (element) {
  kittens.shift(element)
  return kittens
}

function appendKitten (element) {
  [...kittens, "Broom"]
  return [...kittens, "Broom"]
}

function prependKitten (element) {
  ["Arnold", ...kittens]
  return ["Arnold", ...kittens]
}

function removeLastKitten() {
  kittens.slice(0, kittens.length -1)
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten() {
  kittens.slice(1)
  return kittens.slice(1)
}
