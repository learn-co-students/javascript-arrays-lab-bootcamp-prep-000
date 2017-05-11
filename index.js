const app = "I don't do much."
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
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
   var goku = [...kittens, name]
  return goku
}
function prependKitten(name){
  var goku = [name, ...kittens]
  return goku
}
function removeLastKitten(){
  var goku =  kittens.slice(0, kittens.length - 1)
  return goku
}
function removeFirstKitten(){
var goku =  kittens.slice(1)
  return goku
}
