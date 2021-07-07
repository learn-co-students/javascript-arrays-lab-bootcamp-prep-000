var kittens = [] //define your array here

// Add your functions and code here
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
  var newKittensArray = kittens.concat(name)
  return newKittensArray
}

function prependKitten(name) {
  var newKittensArray = [name]
  return newKittensArray.concat(kittens)
}

function removeLastKitten() {
  var newKittensArray = kittens.slice(0, kittens.length - 1)
  return newKittensArray
}

function removeFirstKitten() {
  var newKittensArray = kittens.slice(1, kittens.length)
  return newKittensArray
}
