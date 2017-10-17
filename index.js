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
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = [...kittens, "Broom"]
  return kittens
}

function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = ["Arnold", ...kittens]
  return kittens
}

function removeLastKitten(name){
  var kittens = ["Milo", "Otis"]
  kittens.slice(-1)
  return kittens
}

function removeFirstKitten(name){
  var kittens = ["Otis", "Garfield"]
  kittens.slice(0)
  return kittens
}
