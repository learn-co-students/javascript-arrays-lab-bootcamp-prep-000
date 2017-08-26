
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
}
function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
}
function destructivelyRemoveLastKitten(name){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}
function appendKitten(name){
  var oneMore = [...kittens, 'Broom']
  return oneMore
}
function prependKitten(name){
  var lastOne = ['Arnold', ...kittens]
  return lastOne
}
function removeLastKitten(){
  var remL = kittens.slice(0, kittens.length -1)
  return remL
}
function removeFirstKitten(){
  var remF = kittens.slice(1)
  return remF
}
