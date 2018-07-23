var kittens = ["Milo", "Otis", "Garfield"]
var next = []

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
 return kittens.concat(name)
  }

function prependKitten(name){
 var lime = kittens.splice(2)
 return lime
 
}

function removeLastKitten(){
  return kittens.pop()
}