var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens = kittens.concat(name)
}

function destructivelyPrependKitten(name){
  var x = [name]
  return kittens = x.concat(kittens)
}

function destructivelyRemoveLastKitten(){
  return kittens = kittens.slice(0,2)
}

function destructivelyRemoveFirstKitten(){
  return kittens = kittens.slice(1,3)
}

function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
  var x = [name]
  return x.concat(kittens)
}

function removeLastKitten(){
  return kittens.slice(0,2)
}

function removeFirstKitten(){
  return kittens.slice(1,3)
}
