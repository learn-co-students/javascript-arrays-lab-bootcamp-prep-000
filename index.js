const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}

function appendKitten(name){
  var result = [...kittens, name]
  return result
}

function prependKitten(name){
  var result = [name, ...kittens]
  return result
}

function removeLastKitten(){
  var result = kittens.slice(0, kittens.length - 1)
  return result
}

function removeFirstKitten(){
  var result = kittens.slice(1, kittens.length)
  return result
}
