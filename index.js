var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(elem){
  kittens.push(elem)
  return kittens
}

function destructivelyPrependKitten(elem){
  kittens.unshift(elem)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(elem){
  let newKitten = [...kittens,elem]
  return newKitten
  
}

function prependKitten(elem){
  let newKitten = [elem,...kittens]
  return newKitten
}

function removeLastKitten(){
  let newKitten = kittens.slice(0,-1)
  return newKitten
}

function removeFirstKitten(){
  let newKitten = kittens.slice(1)
  return newKitten
}