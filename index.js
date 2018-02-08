const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop("Garfield")
}

function destructivelyRemoveFirstKitten(){
  kittens.shift("Milo")
}

var kittens = ["Milo", "Otis", "Garfield"] 

function appendKitten(name){
  var newKittens = [...kittens, "Broom"]
  return newKittens
}

function prependKitten(name){
  var newKittens = ["Arnold", ...kittens]
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens.slice (0, kittens.length -1)
  return newKittens
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1, kittens.length)
  return newKittens
}