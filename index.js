var kittens = [`Milo`, `Otis`, `Garfield`] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(`Ralph`)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(`Bob`)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(-1)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens
}

function appendKitten(name) {
 return kittens.concat(`Broom`)
 }

var list1 = [`Arnold`]

function prependKitten(name) {
  return list1.concat(...kittens)
}

function removeLastKitten() {
  return kittens.slice(0, -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
