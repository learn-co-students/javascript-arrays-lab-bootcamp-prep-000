const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var arr = kittens.slice(0)
  arr.push(name)
  return arr
}

function prependKitten(name){
  var arr = kittens.slice(0)
  arr.unshift(name)
  return arr
}

function removeLastKitten(){
  var arr = kittens.slice(0)
  arr.pop()
  return arr
}

function removeFirstKitten(){
  var arr = kittens.slice(0)
  arr.shift()
  return arr
}
