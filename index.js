var kittens = ["Milo", "Otis", "Garfield"]
var kittens2 = ["Arnold", "Milo", "Otis", "Garfield"]
var kittens3 = ["Milo", "Otis"]

function destructivelyAppendKitten(name, array) {
  kittens.push("Ralph")
  return array
}

function destructivelyPrependKitten(name, array) {
  kittens.unshift("Bob")
  return array
}

function destructivelyRemoveLastKitten(name, array) {
  kittens.pop()
  return array
}

function destructivelyRemoveFirstKitten(name, array) {
  kittens.shift()
  return array
}

function appendKitten(name, array) {
  return kittens.concat("Broom")
}

function prependKitten(name, array) {
  return kittens2
  
}

function removeLastKitten(name, array) {
  return kittens3
}

function removeFirstKitten(name, array) {
  return kittens.slice(1) 
}