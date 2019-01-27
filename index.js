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
function destructivelyRemoveLastKitten(name){
 kittens.pop(name)
   return kittens
 }
 function destructivelyRemoveFirstKitten(name){
   kittens.shift(name)
   return kittens
 }
 function appendKitten(name){
   var newKittens = [...kittens, name]
   return newKittens
 }
 function prependKitten(name){
   var kittens2= [name, ...kittens]
   return kittens2
 }
 function removeLastKitten(){
   var kittens3= kittens.slice(0,kittens.length-1)
   return kittens3
 }
 function removeFirstKitten(){
   var kittens4 = kittens.slice(1, kittens.length)
   return kittens4
 }