const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (a){
  kittens.push(a)
  return kittens
}

function destructivelyPrependKitten (a){
  kittens.unshift(a)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten (a){
  var appendKitten = [...kittens, a]
  return appendKitten
}

function prependKitten (a){
  var prependKitten = [a, ...kittens]
  return prependKitten
}

function removeLastKitten() {
  var removeLastKitten = kittens.slice(0, kittens.length -1)
  return removeLastKitten
}

function removeFirstKitten(){
  var removeFirstKitten = kittens.slice(1)
  return removeFirstKitten
}
