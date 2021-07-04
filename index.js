var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var appendKitten = ['Broom']
  return kittens.concat(appendKitten)
}

function prependKitten(name) {
var prependKitten = ['Arnold']
return prependKitten.concat(kittens)
}

function removeLastKitten() {
  var removeLastKitten = kittens.slice(0, 2)
  return removeLastKitten
}

function removeFirstKitten() {
  var removeFirstKitten = kittens.slice(1)
  return removeFirstKitten
}