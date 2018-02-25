const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten (name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
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

function appendKitten (name) {
  var kittensPlus = [...kittens,(name)]
  return kittensPlus
}

function prependKitten (name) {
  var kittensPlus = [(name),...kittens]
  return kittensPlus
}

function removeLastKitten() {
  var kittensMinus = kittens.slice(0, kittens.length -1)
  return kittensMinus
}

function removeFirstKitten() {
  var twoKittens = kittens.slice(-2)
  return twoKittens
}

