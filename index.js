var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(myName) {
  kittens.push(myName)
}

function destructivelyPrependKitten(myName) {
  kittens.unshift(myName)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift([1])
}

function appendKitten(myName) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(myName)
  return kittens
}

function prependKitten(myName) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(myName)
  return kittens
}

function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}

function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift([1])
  return kittens
}
