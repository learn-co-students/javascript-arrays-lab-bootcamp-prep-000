const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}


function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var MOARKittehs = [...kittens, "Broom"]
  return MOARKittehs
}

function prependKitten(name) {
  var MOARKittehs = ["Arnold", ...kittens]
  return MOARKittehs
}
function removeLastKitten () {
  var lessKittehs = kittens.slice(0, kittens.length - 1)
  return lessKittehs
}
function removeFirstKitten () {
  var lessKittehs = kittens.slice(1)
  return lessKittehs
}
