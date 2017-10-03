const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

function appendKitten(name){
  var aKitten = [...kittens]
  aKitten.push(name)
  return aKitten
}

function prependKitten(name){
  var aKitten = [...kittens]
  aKitten.unshift(name)
  return aKitten
}

function removeLastKitten(){
  var aKitten = [...kittens]
  aKitten.pop(name)
  return aKitten
}

function removeFirstKitten(){
  var aKitten = [...kittens]
  aKitten.shift(name)
  return aKitten
}
