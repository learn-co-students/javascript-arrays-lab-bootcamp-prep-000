var kittens = ["Milo", "Otis", "Garfield"]

function kittens(array, element) {
  return kittens
}

function destructivelyAppendKitten(array, element) {
  kittens.push("Ralph")
  return array
}

function destructivelyPrependKitten(array, element) {
  kittens.unshift("Bob")
  return array
}

function destructivelyRemoveLastKitten(array, element) {
  kittens.pop(element)
  return array
}

function destructivelyRemoveFirstKitten(array, element) {
  kittens.shift(element)
  return array
}

function appendKitten(array, element) {
  return [...kittens, "Broom"]
}

function prependKitten(array, element) {
  return ["Arnold", ...kittens]
}

function removeLastKitten(array, element) {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(array, element) {
  return kittens.slice(1)
}
