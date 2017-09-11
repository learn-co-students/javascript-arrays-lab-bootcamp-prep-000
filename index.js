const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(x){
  kittens.push(x)
}

function destructivelyPrependKitten(x){
  kittens.unshift(x)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1)
}

function appendKitten(name){
  return [...kittens,name]
}

function prependKitten(name){

  return [name,...kittens]
}

function removeLastKitten(){
  var z = kittens.slice(0,kittens.length-1)
  return z
}

function removeFirstKitten(){
  var z = kittens.slice(1)
  return z
}
