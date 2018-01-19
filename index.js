const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

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

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function appendKitten(){
  return [...kittens, "Broom"]
}

function prependKitten(){
  return ["Arnold", ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}