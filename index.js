var kittens = ["Milo", "Otis","Garfield"] //define your array here

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
  var newKitty = kittens.concat(name)
  return newKitty
}

function prependKitten(name) {
  var newKitty = [name, ...kittens]
  return newKitty
}

function removeLastKitten() {
  var newKitty = kittens.slice(0, kittens.length-1)
  return newKitty
}

function removeFirstKitten() {
  var newKitty = kittens.slice(1)
  return newKitty
}