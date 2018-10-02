// Add your functions and code here
var kittens = [
  'Milo',
  'Otis',
  'Garfield'
]

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var newArray = kittens.concat(name)
  return newArray
}

function prependKitten(name) {
  var newArray1 = kittens.slice(0)
  newArray1.unshift(name)
  return newArray1
}

function removeLastKitten() {
  var newArray2 = kittens.slice(0, kittens.length - 1)
  return newArray2
}

function removeFirstKitten() {
  var newArray3 = kittens.slice(1)
  return newArray3
}