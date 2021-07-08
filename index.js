var kittens = [] //define your array here

// Add your functions and code here
kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
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

function appendKitten(name) {
  var newKittens = kittens.concat(name)
  return newKittens
}

function prependKitten(name) {
 var newKittens = [name]
  return newKittens.concat(kittens)
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length -1)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1, kittens.length)
  return newKittens
}