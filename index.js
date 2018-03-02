const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
kittens.push("Ralph")
}

function destructivelyPrependKitten(){
kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop("Garfield")
}

function destructivelyRemoveFirstKitten(){
  kittens.shift("Bob")
}

function appendKitten(){
  var newKittens = kittens.slice()
  newKittens.push("Broom")
  return newKittens
}

function prependKitten(){
  var newKittens = kittens.slice()
  newKittens.unshift("Arnold")
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens.slice()
  newKittens.pop("Garfield")
  return newKittens
}

function removeFirstKitten(){
  var newKittens = kittens.slice()
  newKittens.shift("Arnold")
  return newKittens
}