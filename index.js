const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]

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
  return [...kittens,name]
}

function prependKitten(name){
  return [name,...kittens]
}

function removeLastKitten(){
  var len = kittens.length
  return kittens.slice(0,len-1)
}
function removeFirstKitten(){
  var len = kittens.length
  return kittens.slice(1,len)
}
