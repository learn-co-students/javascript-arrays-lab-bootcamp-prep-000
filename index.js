var kittens = ["Milo", "Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
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

function appendKitten(name){
  var new_kitten = [...kittens, name]
  return new_kitten
}

function prependKitten(name){
  var new_kitten = [name, ...kittens]
  return new_kitten
}

function removeLastKitten(){
  var new_kitten = kittens.slice(0,kittens.length -1)
  return new_kitten
}

function removeFirstKitten(){
  var new_kitten = kittens.slice(1) 
  return new_kitten
}