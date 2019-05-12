var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
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
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var newKit = [...kittens, name]
  return newKit
}

function prependKitten(name){
  var newpreKit = [name, ...kittens]
  return newpreKit
}

function removeLastKitten(){
  var newKitNoLast = kittens.slice(0, kittens.length - 1)
  return newKitNoLast
}

function removeFirstKitten(){
  var newKitNoFirst = kittens.slice(1)
  return newKitNoFirst
}
