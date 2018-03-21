var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(anme){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

function appendKitten(name){
return [...kittens,name]
}

function prependKitten(name){
  return [name,...kittens]
}

function removeLastKitten(name){
  var kitten = [...kittens]
  kitten.pop(name)
  return kitten
}

function removeFirstKitten(name){
  var kitten = [...kittens]
  kitten.shift(name)
  return kitten
}