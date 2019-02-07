var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here




function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

var k2 = "Broom"

function appendKitten(name){
 k2 = kittens.slice() + "," + name
 return k2
}

var kap = kittens.slice() 

function prependKitten(name){
 kap.unshift(name)
 return kap
}

var nap = kittens.slice()

function removeLastKitten(){
  nap.pop()
  return nap
}

  var fap = kittens.slice()
  
function removeFirstKitten(){
  fap.shift()
  return fap
}