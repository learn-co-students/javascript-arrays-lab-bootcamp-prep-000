const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(newCat){
  kittens.push(newCat)
  return kittens
}
function destructivelyPrependKitten(newCat){
  kittens.unshift(newCat)
  return kittens
}
function destructivelyRemoveLastKitten(newCat){
  kittens.pop(newCat)
  return kittens
}
function destructivelyRemoveFirstKitten(newCat){
  kittens.shift(newCat)
  return kittens
}
function appendKitten(newCat){
  var newKittens = [...kittens,newCat]
  return newKittens
}
function prependKitten(newCat){
  var newKittens = [newCat,...kittens]
  return newKittens
}
function removeLastKitten(newCat){
  var newKittens = kittens.slice(0,(kittens.length-1))
  return newKittens
}
function removeFirstKitten(newCat){
  var newKittens = kittens.slice(1)
  return newKittens
}
