const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  return kittens
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1, kittens.length)
}
