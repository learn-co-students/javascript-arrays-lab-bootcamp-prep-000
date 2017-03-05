const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name){
  var newArray = [...kittens, name]
  return newArray
}

var kittens = ["Milo", "Otis", "Garfield"]
function prependKitten(name){
  var newArray = [name, ...kittens]
  return newArray
}

var kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten(name){
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}

var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten(name){
  var newArray = kittens.slice(1)
  return newArray
}
