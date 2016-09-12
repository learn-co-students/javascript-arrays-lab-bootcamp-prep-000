const app = "I don't do much."

// create kittens array
var kittens = ['Milo', 'Otis', 'Garfield']

// add kitten to end of original array
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

// add kitten to beginning of original array
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

// remove last kitten from original array
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

// remove first kitten from original array
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

// add kitten to end of new array
function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

// prepends to new array
function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}

// remove last kitten without changing original array
function removeLastKitten() {
  var newKittens = kittens.slice(-1)
  return newKittens
}

// remove last kitten without changing original array
function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length-1)
  return newKittens
}

// remove first kitten without changing original array
function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}
