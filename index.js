const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var newkittens = [...kittens, name]
  return newkittens
}

function prependKitten(name) {
  var newkittens = [name, ...kittens]
  return newkittens
}

function removeLastKitten() {
  var newkitten = kittens.slice(0, kittens.length-1)
  return newkitten
}

function removeFirstKitten() {
  var newkitten = kittens.slice(1, kittens.length)
  return newkitten
}