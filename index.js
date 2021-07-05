var kittens = [] //define your array here

// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  var kittenAppend = [...kittens, name]
  return kittenAppend
}

function destructivelyAppendKitten(name) {
  var kittenAppendDestructively = kittens.push(name)
  return kittenAppendDestructively
}

function prependKitten(name) {
  var kittenPrepend = [name, ...kittens]
  return kittenPrepend
}

function destructivelyPrependKitten(name) {
  var kittenPrependDestructively = kittens.unshift(name)
  return kittenPrependDestructively
}

function removeLastKitten() {
  var kittenRemoveLast = kittens.slice(0, kittens.length -1)
  return kittenRemoveLast
}

function destructivelyRemoveLastKitten() {
  var kittenRemoveLastDestructively = kittens.pop()
  return kittenRemoveLastDestructively
}

function removeFirstKitten() {
  var kittenRemoveFirst = kittens.slice(1)
  return kittenRemoveFirst
}

function destructivelyRemoveFirstKitten() {
  var kittenRemoveFirstDestructively = kittens.shift()
  return kittenRemoveFirstDestructively
}

