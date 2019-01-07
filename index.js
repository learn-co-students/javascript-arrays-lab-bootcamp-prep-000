var kittens = ["Milo","Otis","Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(last){
  kittens.pop(last)
}

function destructivelyRemoveFirstKitten(first){
  kittens.shift(first)
}

function appendKitten(name){
 return[...kittens,("Broom")]
}

function prependKitten(name){
  return[('Arnold'),...kittens]
}

function removeLastKitten(name){
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(name){
  return kittens.slice(1)
}