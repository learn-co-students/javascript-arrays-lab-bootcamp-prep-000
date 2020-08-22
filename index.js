var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
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

function appendKitten(name){
  var newArray1 = kittens.concat(name)
  return newArray1
}

function prependKitten(name){
  var newArray2 = [name, ...kittens]
  return newArray2
}

function removeLastKitten(){
  var newArray3 = kittens.slice(0, kittens.length - 1)
  return newArray3
}

function removeFirstKitten(){
  var newArray4 = kittens.slice(1)
  return newArray4
}
