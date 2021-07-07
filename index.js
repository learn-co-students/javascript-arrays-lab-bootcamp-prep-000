var kittens = [] //define your array here

// Add your functions and code here

function destructivelyAppendKitten (name) {
  return kittens.push(name)
}

function destructivelyPrependKitten (name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten (name) {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten (name) {
  return kittens.shift()
}

function appendKitten (name) {
  var kittens2 = [...kittens, name]
  return kittens2
}

function prependKitten (name) {
  var kittens2 = [name, ...kittens]
  return kittens2
}

function removeLastKitten() {
  var kittens2 = kittens.slice(0, kittens.length - 1)
  return kittens2
}

function removeFirstKitten() {
  var kittens2 = kittens.slice(1)
  return kittens2
}