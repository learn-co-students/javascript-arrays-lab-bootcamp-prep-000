const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop("Garfield")
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift("Otis")
  return kittens
}

function appendKitten(name) {
  var kittens2 = [...kittens, "Broom"]
  return kittens2
}

function prependKitten(name) {
  var kittens2 = ["Arnold", ...kittens]
  return kittens2
}

function removeLastKitten() {
  var kittens2 = kittens.slice(0, 2)
  return kittens2
}

function removeFirstKitten() {
  var kittens2 = kittens.slice(1)
  return kittens2
}
