const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var newarr = [...kittens, name]
  return newarr
}

function prependKitten(name){
  var newarr = [name, ...kittens]
  return newarr
}

function removeLastKitten(){
  var newarr = kittens.slice(0,2)
  return newarr
}

function removeFirstKitten(){
  var newarr = kittens.slice(1)
  return newarr
}