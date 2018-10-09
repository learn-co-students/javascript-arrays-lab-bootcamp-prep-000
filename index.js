var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
 function destructivelyAppendKitten(name) {
   kittens.push(name)
 }
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}
function appendKitten(name){
  var newKittens = kittens.concat(name)
  return newKittens
}
function prependKitten(name){
  var newKittens = [name,...kittens]
  return newKittens
}
function removeLastKitten(name){
  var newKittens = kittens.slice(0,kittens.length-1)
  return newKittens
}
function removeFirstKitten(name){
var newKittens = kittens.slice(1,3)
  return newKittens
}
