// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  var newArray = []
  newArray = kittens.concat(newArray)
  newArray.push(name)
  return newArray
}

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

function prependKitten(name) {
  var newArray = []
  newArray = kittens.concat(newArray)
  newArray.unshift(name)
  return newArray
}

function removeLastKitten() {
  var newArray = []
  newArray = kittens.concat(newArray)
  newArray.pop()
  return newArray
}

function removeFirstKitten() {
  var newArray = []
  newArray = kittens.concat(newArray)
  newArray.shift()
  return newArray
}