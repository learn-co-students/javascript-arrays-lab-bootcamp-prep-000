const app = "I don't do much."
var kittens = ["Milo", "Garfield", "Otis"]


function destructivelyPrependKitten(element) {
  kittens.unshift(element)
  return kittens
 }

function destructivelyAppendKitten(element) {
  kittens.push (element)
  return kittens
}

function destructivelyRemoveLastKitten(element){
  kittens.pop(element)
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
 }

 function appendKitten(element){
   return [...kittens, element]
 }

 function prependKitten(element){
   return  [element, ...kittens]
 }

 function removeFirstKitten() {
   return kittens.slice(1)
 }
function removeLastKitten() {
    return kittens. slice(0, kittens.length - 1)
}
