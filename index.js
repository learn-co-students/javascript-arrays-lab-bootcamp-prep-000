var kittens = ["Milo","Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  
  kittens.shift(name)
}

function appendKitten(name){
  
  var newArray = [...kittens, name]
  return newArray
}

function prependKitten(name){
  
  var newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten(){
  
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}

function removeFirstKitten(){
  var newArray = kittens.slice(1, kittens.length)
  return newArray
}