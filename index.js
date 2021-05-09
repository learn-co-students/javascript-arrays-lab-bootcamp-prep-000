var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  return [...kittens,name]
  
}
function prependKitten(name){
  return [name,...kittens]
}  
function removeLastKitten(){
  var new_kittens  = kittens.slice(0,-1)
  return new_kittens
}
function removeFirstKitten(){
  var new_kittens = kittens.slice(1)
  return new_kittens
}
