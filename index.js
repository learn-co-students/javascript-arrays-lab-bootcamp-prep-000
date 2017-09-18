const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

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
     kittens.shift()
     return kittens
}
function appendKitten(name){
 var newkittens = [...kittens, name]
 return newkittens
}
function prependKitten(name){
  var newkittens = [name, ...kittens]
  return newkittens
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}
function  removeFirstKitten(){
  return kittens.slice(1)
}
