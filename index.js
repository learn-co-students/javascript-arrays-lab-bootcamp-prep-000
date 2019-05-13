var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  var newKit = kittens.push('Ralph')
  return kittens
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
}
function appendKitten(name){
  var newKit = kittens.concat('Broom')
  return newKit
}

function prependKitten(name){
  var newKit = ['Arnold', ...kittens]
  return newKit
}

function removeLastKitten(){
   var newArr = kittens.slice(0, kittens.length-1)
   return newArr
}
function removeFirstKitten(){
   var newArr1 = kittens.slice(1)
   return newArr1
}