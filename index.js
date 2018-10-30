var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten){
  return kittens.push(kitten)
}

function destructivelyPrependKitten(kitten){
  return kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten(kitten){
  return kittens.pop(kitten)
}

function destructivelyRemoveFirstKitten(kitten){
  return kittens.shift(kitten)
}

function appendKitten(kitten){

  return [...kittens,kitten]
}

function prependKitten(kitten){
  return [kitten, ...kittens]
}

function removeLastKitten(kitten){
  return [...kittens.slice(0,2)]
}
function removeFirstKitten(kitten){
  return [...kittens.slice(1,3)]
}
