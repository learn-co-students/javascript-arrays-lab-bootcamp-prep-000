var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
  return kittens
}
function appendKitten(name) {
  var freshKittens = [...kittens, name]
  return freshKittens
}

function prependKitten(name) {
  var freshKittens = [name, ...kittens]
  return freshKittens
}

function removeLastKitten() {
   var reducedKittens = kittens.slice(0, kittens.length - 1)
  return reducedKittens
}

function removeFirstKitten() {
  var prunedKittens = kittens.slice(1)
  return prunedKittens
}