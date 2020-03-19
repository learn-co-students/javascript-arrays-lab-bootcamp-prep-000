var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
 function destructivelyAppendKitten(name) {
   kittens.push(name)
   return kittens
 }
 
 function destructivelyPrependKitten(name) {
   kittens.unshift(name)
 }
 
function destructivelyRemoveLastKitten() {
 kittens.pop()
 return kittens
}

function  destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
 var newKitten = [...kittens, name]
  return newKitten
}

function prependKitten(name) {
  var newKittens = [name,... kittens]
  return newKittens
}

function removeLastKitten() {
  var removeLast = kittens.slice(0, kittens.length -1)
  return removeLast
}

function removeFirstKitten(){
  var removeFirst = kittens.slice(1)
  return removeFirst
}