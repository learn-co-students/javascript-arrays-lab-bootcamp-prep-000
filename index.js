var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  return [...kittens, name]
  }
  
function prependKitten(name) {
return [name, ...kittens]
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length-1)
  }
  
function removeFirstKitten(name) {
  return kittens.slice(1,kittens.length)
}