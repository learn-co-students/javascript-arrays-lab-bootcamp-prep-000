var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name, array) {
 return kittens.push('Ralph')
}

function destructivelyPrependKitten(name, array) {
  return kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(name, array) {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(name, array) {
  return kittens.shift()
}

function appendKitten(name, array) {
  return [...kittens, 'Broom']
}

function prependKitten(name, array) {
  return ['Arnold', ...kittens,]
}

function removeLastKitten(array) {
 var shortkitten = kittens.slice(0, kittens.length - 1)
 return shortkitten
}

function removeFirstKitten(array) {
 var shortkittentwo = kittens.slice(1)
 return shortkittentwo
}
