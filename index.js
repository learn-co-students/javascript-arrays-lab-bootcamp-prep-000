const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (name) {
  return kittens.push(name)
}

function destructivelyPrependKitten (name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten () {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten () {
  return kittens.shift()
}

function appendKitten (name) {
  return [...kittens, name]
}

function prependKitten (name) {
  return [name, ...kittens]
}

function removeLastKitten () {
  var catArray = kittens.slice(0, kittens.length - 1)
  return catArray
}

function removeFirstKitten () {
  var catArray = kittens.slice(1)
  return catArray
}
