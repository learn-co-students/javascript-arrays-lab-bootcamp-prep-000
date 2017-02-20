const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop("Garfield")
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift("Milo")
}

function appendKitten(name) {
  return [...kittens, "Broom"]
}

function prependKitten(name) {
  return ["Arnold", ...kittens]
}

function removeLastKitten(name, index) {
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(name, index) {
  return kittens.slice(1)
}
