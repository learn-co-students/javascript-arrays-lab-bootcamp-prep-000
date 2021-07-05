var kittens = [] //define your array here

// Add your functions and code here

//var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(value){
  kittens.push(value)
  return kittens
}

function destructivelyPrependKitten(value){
  kittens.unshift(value)
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

function appendKitten(value){
 var newKit = [...kittens, value]
  return newKit
}

function prependKitten(value){
var newKit = [value, ...kittens]
  return newKit
}

function removeLastKitten(){

 var newKit =  kittens.slice(0,2)
  return newKit
}

function removeFirstKitten(){
  var newKit = kittens.slice(1,3)
  return newKit
}






