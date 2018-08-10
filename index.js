// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var arr = [...kittens];
  arr.push(name)
  return arr
}

function prependKitten(name){
  var arr = [...kittens];
  arr.unshift(name)
  return arr
}

function removeLastKitten(){
  var arr = [...kittens];
  arr.pop()
  return arr
}

function removeFirstKitten(){
  var arr = [...kittens];
  arr.shift()
  return arr
}