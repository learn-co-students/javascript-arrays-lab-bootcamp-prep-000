var kittens = ['Milo', 'Otis', 'Garfield']

function appendKitten(name){
  return [...kittens, name]
}
function removeLastKitten(){
  var kitten=kittens.slice(0, kittens.length - 1)
  return kitten
}
function removeFirstKitten(){
  // array.slice(which index we want first in our new array, how many?)
    var kitten=kittens.slice(1, kittens.length)
    return kitten
}
function prependKitten(name){
  return [name, ...kittens]
}
function destructivelyAppendKitten(name) {
  var kitten=kittens.push(name)
  return kitten
  }
   function destructivelyPrependKitten (name){
     var kitten = kittens.unshift(name)
     return kitten
   }
   function destructivelyRemoveLastKitten() {
     var kitten = kittens.pop()
     return kitten
   }
   function destructivelyRemoveFirstKitten() {
     var kitten = kittens.shift()
     return kitten 
   }
