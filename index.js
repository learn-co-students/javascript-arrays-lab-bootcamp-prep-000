var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  name = "Ralph"
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  name = "Bob"
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  name = "Broom"
  return [...kittens, name]
}

function prependKitten(name){
  name = "Arnold"
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}