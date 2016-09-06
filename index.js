const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

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
  kittens.shift(0,1)
  return kittens
}

function appendKitten(name){
  var myArray = kittens.slice()
  myArray.push(name)
  return myArray
}

function prependKitten(name){
  var myArray = kittens.slice()
  myArray.unshift(name)
  return myArray
}

function removeLastKitten(){
  var myArray = kittens.slice()
  myArray.pop()
  return myArray
}

function removeFirstKitten(){
  var myArray = kittens.slice()
  myArray.shift(0,1)
  return myArray
}
