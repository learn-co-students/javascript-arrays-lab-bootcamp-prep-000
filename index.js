const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  var poop = new Array()
  poop.push(...kittens)
  poop.push(name)
  return poop
}

function prependKitten(name) {
  var poop = new Array()
  poop.unshift(...kittens)
  poop.unshift(name)
  return poop
}

function removeLastKitten() {
  var poop = new Array()
  poop.unshift(...kittens)
  poop.pop()
  return poop
}

function removeFirstKitten() {
  var poop = new Array()
  poop.unshift(...kittens)
  poop.shift()
  return poop
}
