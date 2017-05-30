const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(n){
  kittens.push(n)
}
function destructivelyPrependKitten(n){
  kittens.unshift(n)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(n){
  return [...kittens,n]
}
function prependKitten(n){
  return [n,...kittens]
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}
