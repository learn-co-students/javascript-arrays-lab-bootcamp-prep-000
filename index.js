const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function appendKitten(name) {
var a = [...kittens, name]
return a
}

function prependKitten(name) {
  var a = [name, ...kittens]
  return a
}

function removeLastKitten() {
  var a = [...kittens]
  a.pop()
  return a
}

function removeFirstKitten() {
  var a = [...kittens]
  a.shift()
  return a
}
