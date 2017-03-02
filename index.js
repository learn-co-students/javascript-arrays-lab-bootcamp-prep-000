const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return name
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return name
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return name
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return name
}

function appendKitten(name) {
  var newKittens
  newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  var newKittens
  newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten(name) {
  var newKittens
  newKittens = kittens.slice(0, kittens.length-1)
  return newKittens
}

function removeFirstKitten(name) {
  var newKittens
  newKittens = kittens.slice(1)
  return newKittens
}
