var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(a){
  kittens = kittens.concat([a])
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(a){
  kittens.pop([a])
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var newCat = kittens.concat([name])
  return newCat
}
function prependKitten(a){
  var newKitty = [a,...kittens]
  return newKitty
}
function removeLastKitten(){
  var byeLast = kittens.slice(0,kittens.length-1)
  return byeLast
}
function removeFirstKitten(){
  var byeKitty = kittens.slice(1)
  return byeKitty
}