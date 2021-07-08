//define your array here
var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}
function appendKitten(name){
  var newkittens = [...kittens]
  newkittens.push(name)
  return(newkittens)
}
function prependKitten(name){
  var newkittens = [...kittens]
  newkittens.unshift(name)
  return(newkittens)
}
function removeLastKitten(name){
  var newkittens = [...kittens]
  newkittens.pop(name)
  return(newkittens)
}
function removeFirstKitten(name){
  var newkittens = [...kittens]
  newkittens.shift(name)
  return(newkittens)
}
