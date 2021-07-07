var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten){

  return kittens.push(kitten)
  }
function destructivelyPrependKitten(kitten){
  return kittens.unshift(kitten)
}
function destructivelyRemoveLastKitten(kitten){
  return kittens.pop(kitten)
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(kitten){
  return kittens.concat(kitten)
}
function prependKitten(kitten){
  return [kitten].concat(kittens)
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1,kittens.length)
}