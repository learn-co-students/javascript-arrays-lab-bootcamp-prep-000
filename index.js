const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten() {
kittens.push("Ralph")
return kittens
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob")
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

function appendKitten(name){
  var arrays = [...kittens, name]
  return arrays
}

function prependKitten(name) {
  var arrays = [name, ...kittens]
  return arrays
}

function removeLastKitten() {
  var arrays = kittens.slice(0, 2)
  return arrays
}
function removeFirstKitten() {
  var arrays = kittens.slice(-2)
  return arrays
}
