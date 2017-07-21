const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(name)
  return kittens
}

function appendKitten(name){
  var kittensAppend = [...kittens, name]
  return kittensAppend
}

function prependKitten(name){
  var kittensPrepend = [name, ...kittens]
  return kittensPrepend
}

function removeLastKitten(name){
  var kittensLast = kittens.slice(0, kittens.length -1)
  return kittensLast
}

function removeFirstKitten(name){
  var kittensFirst = kittens.slice(1)
  return kittensFirst
}
