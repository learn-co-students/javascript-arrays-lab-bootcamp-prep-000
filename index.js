var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten (name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten (){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  //var nameArray=[name]
  var appendKitten=kittens.concat(name)
  return appendKitten
}

function prependKitten (name){
  var prependKitten=[name, ...kittens]
  return prependKitten
}
function removeLastKitten(){
  var removeLastKitten=kittens.slice(0,-1)
  return removeLastKitten
}

function removeFirstKitten(){
  var removeFirstKitten=kittens.slice(1)
  return removeFirstKitten
} 

