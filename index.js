const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten){
  kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten)
  return kittens
}

function destructivelyRemoveLastKitten(kitten){
  kittens.pop(kitten)
  return kittens
}

function destructivelyRemoveFirstKitten(kitten){
  kittens.shift(kitten)
  return kittens
}

function appendKitten(name){

  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(name){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(name){
  return kittens.slice(1)
}
