var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var newArray = kittens.slice()
  newArray.push(name)
  return newArray
}

function prependKitten(name){
  var newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length -1)
  return newArray
}

function removeFirstKitten(){
  var newArray = kittens.slice(1)
  return newArray
}