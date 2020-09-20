var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var addKitten=[...kittens,name]
  return addKitten
}

function prependKitten(name){
  var addKitten=[name,...kittens]
  return addKitten
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}