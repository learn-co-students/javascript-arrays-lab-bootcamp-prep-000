var kittens = [] //define your array here

// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

function appendKitten(name){
  var new_kittens = kittens.slice()
  new_kittens.push("Broom")
  return new_kittens
}


function prependKitten(name){
  var new_kittens = kittens.slice()
  new_kittens.unshift("Arnold")
  return new_kittens
}

function removeLastKitten(name){
  var new_kittens = kittens.slice()
  new_kittens.pop()
  return new_kittens
}

function removeFirstKitten(name){
  var new_kittens = kittens.slice()
  new_kittens.shift()
  return new_kittens
}


