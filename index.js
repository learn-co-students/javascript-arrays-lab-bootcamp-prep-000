const app = "I don't do much."

var name = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
}

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten() {
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}

function removeFirstKitten(){
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
 }
