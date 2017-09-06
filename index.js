const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array, name) {
  kittens.push("Ralph")

}

function destructivelyPrependKitten(array, name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {

  return [...kittens, name]

}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {

  return kittens.slice(0, kittens.length - 1)

}

function removeFirstKitten() {
  return kittens.slice(1)
}
