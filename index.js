const app = "I don't do much."
var kittens = ["Millo","Otis","Garfield"]
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name)
}
function destructivelyRemoveLastKitten(name){
  return kittens.pop(name)
}
function prependKitten(name){
  return [name,...kittens]
}
function appendKitten(name){
  return [...kittens,name]
}
function removeLastKitten(){
return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(){
return kittens.slice(1)
}
