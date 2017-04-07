const app = "I don't do much."

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
  var newKit = [...kittens]
  newKit.push(name)
  return newKit
}

function prependKitten(name){
  var newKit = [...kittens]
  newKit.unshift(name)
  return newKit
}

function removeLastKitten(){
  var newKit = [...kittens]
  newKit.pop()
  return newKit
}
function removeFirstKitten(){
  var newKit = [...kittens]
  newKit.shift()
  return newKit
}
