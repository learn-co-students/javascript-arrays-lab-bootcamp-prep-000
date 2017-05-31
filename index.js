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
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var newArray = kittens
  newArray = [...kittens, name]
  return newArray
}

function prependKitten(name){
  var newArray = kittens
  newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten(){

  return kittens.slice(0,2)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
