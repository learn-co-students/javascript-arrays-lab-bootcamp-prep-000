// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

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
  return kittens.concat(name)
}

function prependKitten(name) {
  var kittens2 = [name] 
  return kittens2.concat(kittens)
  }
  
function removeLastKitten() {
  return kittens.slice(0, -1)
  }
  
function removeFirstKitten() {
  return kittens.slice(1)
  }