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

function prependKitten(name){
  var x = [name, ...kittens]
  return x
}

function appendKitten(name){
  var x = [...kittens, name]
  return x
}

function removeLastKitten(){
  var x = kittens.slice(0, kittens.length - 1)
  return x
}

function removeFirstKitten(){
  var x = kittens.slice(1)
  return x
}