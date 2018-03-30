const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var names = [...kittens, name]
  return names 
}

function prependKitten(name){
  var names = [name, ...kittens]
  return names 
}

function removeLastKitten() {
  var name = kittens.slice(0,-1)
  return name
}

function removeFirstKitten() {
  var name = kittens.slice(-2)
  return name
}