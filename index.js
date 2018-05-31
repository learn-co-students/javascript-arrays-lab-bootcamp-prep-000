const app = "I don't do much."
function normalise() {
 var kittens = ["Milo", "Otis", "Garfield"] 
}

normalise()

function destructivelyAppendKitten(name) {
  
  kittens.push(name)
  return kittens
}

normalise()

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

normalise()

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}

normalise()

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

normalise()

function appendKitten(name) {
  return [...kittens, name]
}

normalise()

function prependKitten(name) {
  
  return[name, ...kittens]
  
}

normalise()

function removeFirstKitten() {
  
  
  return kittens.slice(1)
  
}

normalise()

function removeLastKitten() {
  
  return kittens.slice(0, kittens.length-1)
  
  
}

normalise()

function addElementToEndOfArray(array, element){
  
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  
  array.push(element)
  return array
  
}

function accessElementInArray(array, element){
  return array[element]
  
 
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}