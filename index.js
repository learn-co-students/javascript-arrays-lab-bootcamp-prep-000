var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(newItem){
 return kittens.push(newItem)
}
function destructivelyPrependKitten(newItem){
  return kittens.unshift(newItem)
}
function destructivelyRemoveLastKitten(newItem){
  return kittens.pop(newItem)
  
}
function destructivelyRemoveFirstKitten(newItem){
  return kittens.shift(newItem)
}
function appendKitten(newItem){
 var newArray = kittens.concat(newItem)

  return newArray
  
  
}
function prependKitten(newItem){
  var newArray = [newItem,...kittens]
  return newArray
  
}
function removeLastKitten(newItem){
  var newArray = kittens.slice(0, kittens.length - 1)

  return newArray
}
function removeFirstKitten(newItem){
  var newArray = kittens.slice(1)

  return newArray
}