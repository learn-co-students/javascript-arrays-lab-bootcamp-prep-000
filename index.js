const app = "I don't do much."
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
var newArray = kittens.slice();
  newArray.push(name)
  return newArray
}
function prependKitten(name){
  var newArray = kittens.slice();
  newArray.unshift(name)
  return newArray
}
function removeLastKitten(){
  var newArray = kittens.slice();
  newArray.pop(name)
  return newArray
}
function removeFirstKitten(){
  var newArray = kittens.slice();
  newArray.shift(name)
  return newArray
}