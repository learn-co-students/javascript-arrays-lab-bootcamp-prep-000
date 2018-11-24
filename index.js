var kittens = ['Milo', 'Otis', 'Garfield']

// Add your functions and code here
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
  var endKitten = kittens.concat(name)
  return endKitten
}

function prependKitten(name) {
  var begKitten = [name,...kittens]
  return begKitten
}

function removeLastKitten() {
  var firstKittens = kittens.slice(0,-1)
  return firstKittens
}

function removeFirstKitten() {
  var lastKittens = kittens.slice(1)
  return lastKittens
}