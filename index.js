var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(newName){
  kittens.push(newName)
}

function destructivelyPrependKitten(newName){
  kittens.unshift(newName)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(newName){
  return [...kittens,newName]
}

function prependKitten(newName){
  return [newName,...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens['length'] - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}