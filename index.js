const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}
function prependKitten(name){
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten(name){
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}

function removeFirstKitten(name){
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
}
