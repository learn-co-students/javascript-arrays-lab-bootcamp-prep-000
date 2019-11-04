

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}

function appendKitten(name){
  var kittens2 = [ ...kittens, name]
  return kittens2
}

function prependKitten(name){
  var kittens2 = [name, ...kittens]
  return kittens2
}

function removeLastKitten(){
  return kittens.slice(0, 2)
}

function removeFirstKitten(){
  return kittens.slice(1, 3)
}