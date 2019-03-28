var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name){
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
  var novoKittens = [...kittens, name]
  return novoKittens;
}
function prependKitten(name){
  var novoKittens = [name, ...kittens]
  return novoKittens
}
function removeLastKitten(){
  return kittens.slice(0, (kittens.length - 1))
}
function removeFirstKitten(){
  return kittens.slice(1)
}
