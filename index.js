const app = "I don't do much."

//kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  var newkitten = [...kittens, name]
  return newkitten
}

function prependKitten(name) {
  var newkitten = [name, ...kittens]
  return newkitten
}

function removeLastKitten() {
  var newkitten = kittens.slice(0, kittens.length - 1)
  return newkitten
}

function removeFirstKitten() {
  var newkitten = kittens.slice(1)
  return newkitten
}
