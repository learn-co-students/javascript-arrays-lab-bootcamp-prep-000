//array//
var kittens = ["Milo", "Otis", "Garfield"]

//destructive functions//
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

//conservative functions//
function appendKitten(name){
  var newarray = [...kittens, name]
  return newarray
}

function prependKitten(name){
  var newarray = [name, ...kittens]
  return newarray
}

function removeLastKitten(){
  var newarray = kittens.slice(0, kittens.length - 1)
  return newarray
}

function removeFirstKitten(){
  var newarray = kittens.slice(1)
  return newarray
}