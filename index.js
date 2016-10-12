const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
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

function appendKitten(name) {
  var kit2 = [...kittens, name]
  return kit2
}

function prependKitten(name) {
  var kit2 = [name, ...kittens]
  return kit2
}

function removeLastKitten() {
  var kit2 = kittens.slice(0,kittens.length-1)
  return kit2
}

function removeFirstKitten() {
  var kit2 = kittens.slice(1, kittens.length)
  return kit2
}
