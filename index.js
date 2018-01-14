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

function appendKitten(name) {
  var kits = kittens.slice(0)
  kits.push(name)
  return kits
}

function prependKitten(name) {
  var kits = kittens.slice(0)
  kits.unshift(name)
  return kits
}

function removeLastKitten() {
  var kits = kittens.slice(0)
  kits.pop()
  return kits
}

function removeFirstKitten() {
  var kits = kittens.slice(0)
  kits.shift()
  return kits
}
