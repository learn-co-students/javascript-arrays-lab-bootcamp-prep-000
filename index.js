var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  return kittens.push(name) 
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name)
}

function destructivelyPrependKitten(name){
    return kittens.unshift(name)
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name)
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name,...kittens]
}

function removeLastKitten(){
    return kittens.slice(0,kittens.length-1)
  
}

function removeFirstKitten(){
  return kittens.slice(1)
}
// Add your functions and code here
