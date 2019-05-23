var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens = kittens.concat(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens = [name,...kittens]
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens = kittens.slice(0,kittens.length-1)
}

function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1,kittens.length)
}

function appendKitten(name){
  var newKittens = kittens.concat(name)
  return newKittens
}

function prependKitten(name){
  var newKittens = [name,...kittens]
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens.slice(0,kittens.length-1)
  return newKittens
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1,kittens.length)
  return newKittens
}