var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

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
  var newKitten = [...kittens, name]
  return newKitten
}

function prependKitten(name){
  var newKitty = [name, ...kittens]
  return newKitty
}

function removeFirstKitten(){
  var myKitten = kittens.slice(1)
  return myKitten
}

function removeLastKitten(){
  var myKitty = kittens.slice(0, kittens.length -1)
  return myKitty
}






