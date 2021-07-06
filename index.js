var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

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
  var newKittenArray = kittens.concat()
  newKittenArray.push(name)
  return newKittenArray
}

function prependKitten(name) {
  var newKittenArray = kittens.concat()
  newKittenArray.unshift(name)
  return newKittenArray
}

function removeLastKitten () {
  var newKittenArray = kittens.concat()
  newKittenArray.pop()
  return newKittenArray
}

function removeFirstKitten () {
  var newKittenArray = kittens.concat()
  newKittenArray.shift()
  return newKittenArray
}
