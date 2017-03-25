const app = "I don't do much."

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
  kittens.shift()
}

function appendKitten(name) {
  name = [...kittens, "Broom"]
  return name
}

function prependKitten(name) {
  name = ["Arnold", ...kittens]
  return name
}

function removeLastKitten(name) {
  var removed = kittens.slice(0, kittens.length - 1)
  return removed
}

function removeFirstKitten(name) {
  var removed = kittens.slice(1)
  return removed
}
