var kittens = ["Milo","Otis","Garfield"] //define your array here

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
  kittens = kittens.slice(0, kittens.length-1)
  return kittens
}

function destructivelyRemoveFirstKitten () {
  kittens = kittens.slice(1)
  return kittens
}

function appendKitten(name) {
  var kittens2 = kittens.concat(name)
  return kittens2
}

function prependKitten(name) {
  var kittens2 = [name]
  var kittens2 = kittens2.concat(kittens)
  return kittens2
}

function removeLastKitten() {
  var kittens2 = kittens.slice(0, kittens.length-1)
  return kittens2
}

function removeFirstKitten () {
  var kittens2 = kittens.slice(1)
  return kittens2
}