var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
 var myKittens = kittens.concat(name)
 return myKittens
}

function prependKitten(name) {
  var myKittens = [name].concat(kittens)
  return myKittens
}

function removeLastKitten() {
  var myKittens = kittens.slice(0, kittens.length-1)
  return myKittens
}

function removeFirstKitten() {
  var myKittens = kittens.slice(1, kittens.length)
  return myKittens
}

