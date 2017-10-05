const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(a){
  kittens.push(a)
  return kittens
}

function destructivelyPrependKitten(a){
  kittens.unshift(a)
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

function appendKitten(a){
  var b = [...kittens, a]
  return b
}

function prependKitten(a){
  var b = [a, ...kittens]
  return b
}

function removeLastKitten(){
  var b = kittens.slice(0, kittens.length-1)
  return b
}

function removeFirstKitten(){
  var b = kittens.slice(1)
  return b
}
