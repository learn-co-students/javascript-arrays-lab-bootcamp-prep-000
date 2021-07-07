var kittens = [] //define your array here

// Add your functions and code here
var kittens = [`Milo` , `Otis` , `Garfield`]

function Arrays() {
  return kittens
}

function destructivelyAppendKitten() {
  kittens.push(`Ralph`)
  return kittens
}

function destructivelyPrependKitten() {
  kittens.unshift(`Bob`)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten() {
  kittens.slice(1 , 3)
  return kittens.concat(`Broom`)
}

function prependKitten() {
  var kittens2 = [`Arnold` , ...kittens]
  return kittens2
}

function removeLastKitten() {
  return kittens.slice(0 , kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}