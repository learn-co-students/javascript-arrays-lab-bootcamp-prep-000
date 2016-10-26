const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
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
function prependKitten(name){
  var newKittens = [name, ...kittens]
  return newKittens
}
function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}
function removeFirstKitten(){
  var newArray = kittens.slice(1)
  return newArray
}
