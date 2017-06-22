const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(x){
  kittens.push(x)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(x){
  kittens.pop(x)
  return kittens
}

function destructivelyRemoveFirstKitten(x){
  kittens.shift(x)
  return kittens
}

function appendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  var newkittens = kittens
  newkittens.push(name)
  return newkittens
}
function prependKitten(name){
  var newkittens = ["Milo", "Otis", "Garfield"]
  var newestkittens = newkittens
  newestkittens.unshift(name)
  return newestkittens
}
function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  var newerkittens = kittens
  newerkittens.pop(name)
  return newerkittens
}
function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  var kitten = kittens
  kitten.shift(name)
  return kitten
}
