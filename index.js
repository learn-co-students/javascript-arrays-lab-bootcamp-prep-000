var kittens = [] //define your array here

// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens
}

function appendKitten(name){
  return kittens.concat(name)
  }
  
function prependKitten(name){
  var newKittens = kittens.slice();
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten(name){
  var newKittens = kittens.slice(0,2)
  return newKittens
}

function removeFirstKitten(name){
  var newKittens = kittens.slice(1)
  return newKittens
}