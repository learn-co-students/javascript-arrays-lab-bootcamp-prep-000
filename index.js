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

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var moreKittens = [...kittens, name]
  return moreKittens
}

function prependKitten(name){
  var prependedKittens = [name, ...kittens]
  return prependedKittens
}

function removeLastKitten(){
  var noLastKittens = kittens.slice(0, length - 1)
  return noLastKittens
}

function removeFirstKitten(){
  var removedFirstK = kittens.slice(1)
  return removedFirstK
}
