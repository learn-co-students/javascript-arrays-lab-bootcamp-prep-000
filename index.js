var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}


function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}


function destructivelyRemoveLastKitten() {
  kittens.pop(name)
}


function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
}


function appendKitten(name) {
  var newArray = []
  newArray = [...kittens, name]
  //kittens.concat(name)
  return newArray
}


function prependKitten(name) {
 var newArray = []
  newArray = [name, ...kittens]
  return newArray 
}


function removeLastKitten() {
  var newArray = []
  newArray = kittens.slice(0, -1)
  return newArray
}


function removeFirstKitten() {
  var newArray = []
  newArray = kittens.slice(1)
  return newArray
}