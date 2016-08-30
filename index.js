const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten() {
  kittens.push("Ralph")
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten() {
  appendKitten = [...kittens, "Broom"]
  return appendKitten
}

function prependKitten() {
  prependKitten = ["Arnold",...kittens]
  return prependKitten
}


function removeLastKitten() {
  removeLastKitten = kittens.slice(0, kittens.length - 1)
  return removeLastKitten
}

function removeFirstKitten() {
  removeFirstKitten = kittens.slice(1)
  return removeFirstKitten
}
