const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(name)
}

function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  var newKittens = [name,...kittens]
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens.slice(0,-1)
  return newKittens
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1)
  return newKittens
}
