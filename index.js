
var kittens=["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kittenName){
  kittens.push(kittenName)
  return kittens
}

function destructivelyPrependKitten(kittenName){
  kittens.unshift(kittenName)
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

function appendKitten(kittenName){
  return [...kittens, kittenName]
}

function prependKitten(kittenName){
  return [kittenName, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
