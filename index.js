const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(newcat){
  kittens.push(newcat)
  return kittens
}

function destructivelyPrependKitten(newcat){
  kittens.unshift(newcat)
  return kittens
}

function destructivelyRemoveLastKitten(newcat){
  kittens.pop(newcat)
  return kittens
}

function destructivelyRemoveFirstKitten(newcat){
  kittens.shift(newcat)
  return kittens
}

function appendKitten(newcat){
  var newKittens = [...kittens,newcat]
  return newKittens
}

function prependKitten(newcat){
  var newKittens = [newcat,...kittens]
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length-1)
  return newKittens
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1)
  return newKittens
}