var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']

function  destructivelyAppendKitten(){
  
}

function appendKutten(element){
    var kittens1 = [kittens,...element]
    return kittens1
}
function destructivelyAppendKitten(element){
  return kittens.push(element)
}

function destructivelyPrependKitten(element){
  kittens.unshift(element)
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

function appendKitten(element){
var kittens1 = [...kittens,element]
return kittens1
}

function prependKitten(element){
  var kittens1 = [element ,...kittens]
return kittens1
}

function removeLastKitten(){
  return kittens.slice(0,-1)
  
}
function removeFirstKitten(){
  return kittens.slice(1)}