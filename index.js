var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens = kittens.slice(1)
  return kittens
}

function removeLastKitten() {
  var x = kittens
  x = x.slice(0, x.length - 1)
  return x
}

function removeFirstKitten() {
  var x = kittens
  x = x.slice(1)
  return x
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}
