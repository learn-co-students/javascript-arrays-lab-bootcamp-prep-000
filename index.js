const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
kittens.push(name)
  return kittens
}
kittens=["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
kittens=["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
kittens=["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
kittens=["Milo", "Otis", "Garfield"]
function appendKitten(name){
var  newKitten= [...kittens, name]
  return newKitten
}
function prependKitten(name){
  var newKitten=[name,...kittens]
  return newKitten
}
function removeLastKitten(){
  var newKitten=kittens.slice(0, kittens.length-1)
  return newKitten
}
kittens=["Milo", "Otis", "Garfield"]
function removeFirstKitten(){
  var newKitten=kittens.slice(1)
  return newKitten
}
