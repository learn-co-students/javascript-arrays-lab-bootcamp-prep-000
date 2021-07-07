var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(kittens[3])
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift(kittens[0])
}

var newKitten = "Broom"

function appendKitten() {
  return kittens.concat(newKitten)
}

var prependKittenName = ["Arnold", ]

function prependKitten() {
  return prependKittenName.concat(kittens)
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0 , -1)
}
