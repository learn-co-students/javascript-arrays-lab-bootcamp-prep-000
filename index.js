var kittens = [] //define your array here

// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.splice(3, 0, name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.splice(0, 0, name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.splice(2, 1)
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.splice(0, 1)
  return kittens
}

function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  var newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, 2)
  return newKittens
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1)
  return newKittens
}