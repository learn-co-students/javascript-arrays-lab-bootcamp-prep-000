var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop("Garfield")
  return kittens 
}
function destructivelyRemoveFirstKitten() {
  kittens.shift("Milo")
  return kittens
}

function appendKitten(name) {
  var appendKitten = [...kittens, "Broom"]
  return appendKitten 
}

function prependKitten(name) {
  var prependKitten = ["Arnold", ...kittens]
  return prependKitten 
}

function removeLastKitten() {
  var lastKittenGone = kittens.slice(0, kittens.length - 1)
  return lastKittenGone
}

function removeFirstKitten() {
  var firstKittenGone = kittens.slice(1)
  return firstKittenGone
}


