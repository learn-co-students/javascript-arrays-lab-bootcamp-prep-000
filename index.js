const app = "I don't do much."
const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function kittens() {
  return kittens
}

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}

function appendKitten(name) {
    var newArray = kittens.slice()
    newArray.push(name)
    return newArray
}

function prependKitten(name) {
  var newArray = kittens.slice()
  newArray.unshift(name)
  return newArray
}

function removeLastKitten() {
  var newArray = kittens.slice()
  newArray.pop(name)
  return newArray
}

function removeFirstKitten() {
  var newArray = kittens.slice()
  newArray.shift(name)
  return newArray
}
