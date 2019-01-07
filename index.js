var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(ralph){
 kittens.push("Ralph")
  return 
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  return kittens
}

function appendKitten(name){
 var newKitten = [...kittens]
 newKitten.push("Broom")
 return newKitten
}

function prependKitten(name){
  var newKitten = [...kittens]
  newKitten.unshift("Arnold")
  return newKitten
}

function removeLastKitten(name){
  var lessKitten = [...kittens]
  lessKitten.pop()
  return lessKitten
}

function removeFirstKitten(name){
  var lessKitten = [...kittens]
  lessKitten.shift()
  return lessKitten
}
