var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}
function appendKitten(name){
  return kittens.concat(name)
}
function prependKitten(name){
  var newKittens = [name]
  return newKittens.concat(kittens)
}
function removeLastKitten(name){
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}
