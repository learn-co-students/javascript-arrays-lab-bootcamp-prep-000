var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  var newKittens = kittens.concat(name)
  return newKittens
}

function prependKitten(name) {
  var newKittens = [name].concat(kittens)
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0,length-1)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}