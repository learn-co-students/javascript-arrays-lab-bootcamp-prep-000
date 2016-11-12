const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var newKittens
  return newKittens = [...kittens, name]
}

function prependKitten(name){
  var newKitten; return newKitten = [name, ...kittens]
}

function removeLastKitten(){
  var newKitten; return newKitten = kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  var newKitten; return newKitten = kittens.slice(1,kittens.length)
}
