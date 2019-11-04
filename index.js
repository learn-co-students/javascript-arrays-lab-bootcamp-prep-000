var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return prependKitten
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
  var appendKitten = [...kittens, name]
  return appendKitten
}

function prependKitten(name){
  var prependKitten = [name, ...kittens]
  return prependKitten
}

function removeLastKitten(){
  var removeLast = kittens.slice(0, kittens.length -1)
  return removeLast
}

function removeFirstKitten(){
  var removeFirst = kittens.slice(1)
  return removeFirst
}