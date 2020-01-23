var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(newName){
  kittens.push(newName)
  return kittens
}
function destructivelyPrependKitten(newName){
  kittens.unshift(newName)
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
function appendKitten(newName){
  var moarKittens = [...kittens, newName]
  return moarKittens
}
function prependKitten(newName){
  var moarKittens = [newName, ...kittens]
  return moarKittens
}
function removeLastKitten()
{
  var lessKittens = kittens.slice(0, kittens.length-1)
  return lessKittens
}
function removeFirstKitten(){
  var lessKittens = kittens.slice(1)
  return lessKittens
}