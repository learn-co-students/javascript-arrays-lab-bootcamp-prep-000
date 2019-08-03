var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array) {
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(array) {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(array) {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(array) {
  return kittens.shift()
}

function appendKitten(array) {
  return [...array, "Broom"];
}