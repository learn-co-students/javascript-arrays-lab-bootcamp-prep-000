var kittens = [] //define your array here

// Add your functions and code here
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
  return kittens.shift()
}
function appendKitten(name){
  var newArr=[...kittens]
  newArr.push(name)
  return newArr
}
function prependKitten(name){
  var newArr=[...kittens]
  newArr.unshift(name)
  return newArr
}
function removeLastKitten(){
   var newArr=[...kittens]
   newArr.pop()
   return newArr
}
function removeFirstKitten(name){
  var newArr=[...kittens]
  newArr.shift(name)
  return newArr
}