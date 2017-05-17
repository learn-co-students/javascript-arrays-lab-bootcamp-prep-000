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
  var newKit = [...kittens, name]
  return newKit
}

function prependKitten(name){
  var newKit = [name, ...kittens]
  return newKit
}

function removeLastKitten(){
  var newKit = kittens.slice(0, kittens.length - 1)
  return newKit
}

function removeFirstKitten(){
  var newKit = kittens.slice(1)
  return newKit
}
