const app = "I don't do much."
var kittens = ['Milo','Otis','Garfield']

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
  var kitten_2 = [...kittens,name]
  return kitten_2
}
function prependKitten(name){
  var kitten_2 = [name,...kittens]
  return kitten_2
}
function removeLastKitten(){
  var kitten_2 = kittens.slice(0,kittens.length - 1)
  return kitten_2
}
function removeFirstKitten(){
  var kitten_2 = kittens.slice(1)
  return kitten_2
}
