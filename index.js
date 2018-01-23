const kittens = ["Milo", "Otis", "Garfield"]
var name = "Ralph"
var name2 = "Bob"
var name3 = "Broom"
var name4 = "Arnold"

function destructivelyAppendKitten(name){
    kittens.push(name)
}

function destructivelyPrependKitten(name2){
  kittens.unshift(name2)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name3){
  var kitten = [...kittens, name3]
  return kitten
}

function prependKitten(name4){
  var kitten = [name4, ...kittens]
  return kitten
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length - 1)
}

function removeFirstKitten(){
  var kitten = kittens.slice(1, kittens.length)
  return kitten
}
