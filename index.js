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
  var adurs = [...kittens, name]
  return adurs
}

function prependKitten(name) {
  var adurs = [name, ...kittens]
  return adurs
}

function removeLastKitten() {
  kittens.slice(kittens.length - 1)
  var adurs = kittens.slice(0, kittens.length - 1)
  return adurs
}

function removeFirstKitten() {
  kittens.slice(1)
  var adurs = kittens.slice(1)
  return adurs
}