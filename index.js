// const app = "I don't do much."

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
  var kittensNewLast = [...kittens, name]
  return kittensNewLast
}

function prependKitten(name){
  var kittensNewFirst = [name, ...kittens]
  return kittensNewFirst
}

function removeLastKitten(){
  var kittensWithoutLast = kittens.slice(0, kittens.length - 1)
  return kittensWithoutLast
}

function removeFirstKitten(){
  var kittensWithoutFirst = kittens.slice(1)
  return kittensWithoutFirst
}
