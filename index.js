const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function kittens() {
var kittens = ["Milo", "Otis", "Garfield"]
}

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


function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}

function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  return kittens
}


function appendKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = [...kittens, "Broom"]
  return kittens
}

function prependKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = ["Arnold", ...kittens]
  return kittens
}
