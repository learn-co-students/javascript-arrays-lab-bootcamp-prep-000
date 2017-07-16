const app = "I don't do much."
const kittens = ["Milo", "Otis","Garfield"]
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
  var addKittens = [...kittens, name]
  return addKittens
}
function prependKitten(name){
  var minusKittens = [name, ...kittens]
  return minusKittens
}
function removeLastKitten(){
  var dropKitten = kittens.slice(0, kittens.length - 1)
  return dropKitten
}
function removeFirstKitten(){
  var cutKitten = kittens.slice(1)
  return cutKitten
}
