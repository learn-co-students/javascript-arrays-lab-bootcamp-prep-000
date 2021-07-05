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
  kittens.shift()
}

function appendKitten(name) {
  var kitten = [...kittens, name]
  return kitten
}

function prependKitten(name) {
  var kitten = [name, ...kittens]
  return kitten
}

function removeLastKitten() {
  return kittens.slice(0,-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}