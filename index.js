
var kittens = [ "Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  var ar = [...kittens]
  ar.pop()
  
  return ar
}

function removeFirstKitten() {
  var array = [...kittens]
  array.shift()
  
  return array
}