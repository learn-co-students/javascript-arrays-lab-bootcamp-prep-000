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
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  var temp = [...kittens, name]
  return temp
}
function prependKitten(name){
  var temp = [name, ...kittens]
  return temp
}
function removeLastKitten(){
  var temp = kittens.slice(0,kittens.length -  1)
  return temp
}
function removeFirstKitten(){
  var temp = kittens.slice(1)
  return temp
}