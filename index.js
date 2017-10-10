const app = "I don't do much."
//var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens === kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens === kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens === kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens === kittens.shift()
  return kittens
}

function appendKitten(name) {
  var result = [...kittens, name]
  return result
}

function prependKitten(name) {
  var result = [name, ...kittens]
  return result
}

function removeLastKitten() {
  var result = kittens.slice(0,kittens.length-1)
  return result
}

function removeFirstKitten() {
  var result = kittens.slice (1, kittens.length)
  return result
}
