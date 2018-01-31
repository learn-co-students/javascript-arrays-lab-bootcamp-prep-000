const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

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

var otherKitten = "Broom"
function appendKitten() {
  var moreKittens = [...kittens, otherKitten]
  return moreKittens
}

var differentKitten = "Arnold"
function prependKitten() {
  var moreKittens = [differentKitten, ...kittens]
  return moreKittens
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}