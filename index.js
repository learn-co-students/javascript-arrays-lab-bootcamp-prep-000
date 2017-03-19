const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var kitties = [...kittens, name]
  return kitties
}

function prependKitten(name) {
  var kittiess = [name, ...kittens]
  return kittiess
}


function removeFirstKitten() {
  var kittensz = kittens.slice(1)
  return kittensz
}

function removeLastKitten() {
  var kkittens = kittens.slice(0, kittens.length - 1)
  return kkittens
}
