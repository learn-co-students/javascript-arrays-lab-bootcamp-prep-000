const app = "I don't do much."

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}
function destructivelyAppendKitten(name){
  kittens.push('Ralph')
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
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
  var newKittens=[...kittens,name]
  return newKittens
}
function prependKitten(name){
  var newKittens=[name,...kittens]
  return newKittens
}
function removeLastKitten(){
  var oneLessKitten= kittens.slice(0, kittens.length -1)
  return oneLessKitten
}
function removeFirstKitten(){
var newKittens= kittens.slice(1)
return newKittens
}
