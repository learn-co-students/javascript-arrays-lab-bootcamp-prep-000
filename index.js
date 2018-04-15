const app = "I don't do much."
var kittens= ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}

function prependKitten(name) {
  var newKittens= [name, ...kittens]
  return newKittens
}

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

function removeLastKitten(name) {
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(name) {
  return kittens.slice(1)
}