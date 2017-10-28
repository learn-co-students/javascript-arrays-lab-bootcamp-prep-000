const kittens = ["Milo","Otis","Garfield"]

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
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var myArray = [...kittens,name]
  return myArray
}

function prependKitten(name){
  var myArray = [name,...kittens]
  return myArray
}

function removeLastKitten(){
  var myArray = kittens.slice(0,kittens.length-1)
  return myArray
}

function removeFirstKitten(){
  var myArray = kittens.slice(1)
  return myArray
}
