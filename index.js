const app = "I don't do much."

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

function appendKitten(name){
  var newKittens = kittens.slice(0) // to make a copy of an array use slice
  newKittens.push(name)
  return newKittens
}

function prependKitten(name) {
  var newKittens = kittens.slice(0)
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0)
  newKittens.pop()
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(0)
  newKittens.shift()
  return newKittens
}
