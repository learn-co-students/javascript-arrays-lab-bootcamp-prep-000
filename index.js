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

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name)
}

function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
var newKittens = [name, ...kittens]
return newKittens
}

function removeLastKitten(name){
  var lessKittens = kittens.slice(0, 2)
  return lessKittens
}

function removeFirstKitten(name){
  var twoKittens = kittens.slice(1)
  return twoKittens
}
