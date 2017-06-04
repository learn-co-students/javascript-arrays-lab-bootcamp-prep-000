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

var newKittens=Array()

function appendKitten(name){
  newKittens=kittens.slice(0)
  newKittens.push(name)
  return newKittens
}

function prependKitten(name){
  newKittens=kittens.slice(0)
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten(){
  newKittens=kittens.slice(0)
  newKittens.pop()
  return newKittens
}

function removeFirstKitten(){
  newKittens=kittens.slice(0)
  newKittens.shift()
  return newKittens
}
