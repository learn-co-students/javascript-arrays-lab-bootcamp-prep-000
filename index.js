var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  kittens
}
var kittens1 = ["Broom"]
var kittens2 = ["Arnold"]
function appendKitten(name){
  return kittens.concat(kittens1)
}
function prependKitten(name){
  return kittens2.concat(kittens)
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(){
  return kittens.slice(1,3)
}
