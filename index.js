const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

destructivelyAppendKitten("Ralph")

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

destructivelyPrependKitten("Ralph")

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var cat = [...kittens, name]
  return cat
}
appendKitten("Broom")

function prependKitten(name){
  var cat = [name,...kittens]
  return cat
}

prependKitten("Broom")

function removeLastKitten(){
  var cat = kittens.slice(0,kittens.length - 1)
  return cat
}

removeLastKitten()

function removeFirstKitten(){
  var cat = kittens.slice(1,kittens.length)
  return cat
}

removeFirstKitten()
