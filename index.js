var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
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
  var result = kittens.concat(name)
  return result
}
function prependKitten(name){
  var addition = [name]
  var result = addition.concat(kittens)
  return result
}
function removeLastKitten(){
  var result = kittens.slice(0, kittens.length -1)
  return result
}
function removeFirstKitten(){
  var result = kittens.slice(1)
  return result
}
