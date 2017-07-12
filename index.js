const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() { //needs work
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() { //needs work
  kittens.shift(1)
  return kittens
}

function appendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  return [...kittens, name]
}

function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  return [name, ...kittens]
}

function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(1)
}
