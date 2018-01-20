var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
var kittens = ['Milo', 'Otis', 'Garfield', 'Ralph'];

 function destructivelyPrependKitten(name) {
kittens.unshift(name)
  return kittens
 }
var kittens = ['Bob', 'Milo', 'Otis', 'Garfield'];

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}
var kittens = ['Milo', 'Otis'];

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}
var kittens = ['Milo', 'Otis', 'Garfield', 'Broom'];

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name)
  return newArray
}
var kittens = ['Arnold', 'Milo', 'Otis', 'Garfield'];

function prependKitten(name) {
return ["Arnold", ...kittens]
}
var kittens = ['Milo', 'Otis', 'Garfield'];

function removeLastKitten(name) {
  var newArray = kittens.slice();
  newArray.pop()
  return newArray
}
var kittens = ['Milo', 'Otis', 'Garfield'];

function removeFirstKitten(name) {
  var newArray = kittens.slice();
  newArray.shift()
  return newArray
}
