var kittens = [] //define your array here

// Add your functions and code here

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1,kittens.length)
}