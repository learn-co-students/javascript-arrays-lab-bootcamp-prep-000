const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
//
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.splice(kittens.length - 1)
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  const appnewKittens = [...kittens, name]
  return appnewKittens
}

function prependKitten(name) {
  const prenewKittens = [name, ...kittens]
  return prenewKittens
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice(1, kittens.length)
}
//
//
