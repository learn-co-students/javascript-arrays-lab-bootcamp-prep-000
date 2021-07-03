var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name){
  return kittens.push(name)
}

var destructivelyPrependKitten = function(name){
  return kittens.unshift(name)
  
}

var destructivelyRemoveLastKitten = function(){
 kittens.pop()
 
}

var destructivelyRemoveFirstKitten = function(){
  return kittens.shift()
}

var appendKitten = function(name){
  return kittens.concat(name)
}

var prependKitten = function(name){
  const kittens2 = [name, ...kittens]
  return kittens2
}

var removeLastKitten = function(){
  const kittens3 = kittens.slice(0, kittens.length-1)
  return kittens3
}

var removeFirstKitten = function(){
  const kitten4 = kittens.slice(1)
  return kitten4
}


// console.log(destrivelyRemoveLastKitten())
// console.log(prependKitten("harvey"))