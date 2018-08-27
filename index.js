var kittens = ["Milo", "Otis", "Garfield"];

function kittens() {
  return kittens
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

function appendKitten(name) {
  var newArr = kittens.slice()
  newArr.push(name)
  return newArr
}


function prependKitten(name) {
  var newArr = kittens.slice()
  newArr.unshift(name)
  return newArr
}


function removeLastKitten(name) {
  var newArr = kittens.slice()
  newArr.pop()
  return newArr
}

function removeFirstKitten(name) {
  var newArr = kittens.slice()
  newArr.shift()
  return newArr
}

// Add your functions and code here
