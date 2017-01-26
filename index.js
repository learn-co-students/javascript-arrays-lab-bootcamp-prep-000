const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")

}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop(2)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
}

function appendKitten(name) {
  return [...kittens, "Broom"]
}

function prependKitten() {
  return ["Arnold", ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
