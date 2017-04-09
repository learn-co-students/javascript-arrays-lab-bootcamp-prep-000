const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(){
  kittens.shift(name)
}
function appendKitten(name){
  var kittens2 = [...kittens, 'Broom']
  return kittens2
}
function prependKitten(name){
  var kittens2 = ['Arnold', ...kittens]
  return kittens2
}
function removeLastKitten(){
  var kittens2 = kittens.slice(0, kittens.length - 1)
  return kittens2
}
function removeFirstKitten(){
  var kittens2 = kittens.slice(1)
  return kittens2
}
