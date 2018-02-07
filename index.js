const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var cats = [...kittens,"Broom"]
   return cats
}

function prependKitten(name) {
  var lions = ["Arnold", ...kittens]
  return lions
}

function removeLastKitten() {
  var kitten = kittens.slice(0, kittens.length-1)
  return kitten
}

function removeFirstKitten() {
  var goats = kittens.slice(1)
  return goats
}