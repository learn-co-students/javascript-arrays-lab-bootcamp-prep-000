const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
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
  var newArray = kittens.slice();
  newArray.push(name)
  return newArray
}

function prependKitten(name){
  var newArray = kittens.slice();
  newArray.unshift(name)
  return newArray
}

function removeLastKitten(name){
  var newArray = kittens.slice();
  newArray.pop(name)
  return newArray
}

function removeFirstKitten(name){
  var newArray = kittens.slice();
  newArray.shift(name)
  return newArray
}

