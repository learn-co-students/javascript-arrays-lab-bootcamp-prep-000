var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function estructivelyPrependKitten(name) {
  return kittens.unshift(name)
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
  return kittens.concat(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function prependKitten(name) {
  var kittys = kittens.slice()
  kittys.unshift(name)
  return kittys
}

function removeLastKitten() {
  var kittys = kittens.slice()
  kittys.pop()
  return kittys
}

function removeFirstKitten() {
  var kittys = kittens.slice()
  kittys.shift()
  return kittys
}