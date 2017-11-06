const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
    return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newKittens = [...kittens, "Broom"]
    return newKittens
}

function prependKitten(name) {
  var newKittens = ["Arnold", ...kittens]
    return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, length-1)
    return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1)
    return newKittens
}
