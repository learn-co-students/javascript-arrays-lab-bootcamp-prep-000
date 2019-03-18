var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(foo) {
  kittens.push(foo)
  return kittens
}

function destructivelyPrependKitten (foo) {
  kittens.unshift(foo)
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

function appendKitten (foo) {
  var newKittenBack = [foo]
  return kittens.concat(newKittenBack)
}

function prependKitten (foo) {
  var newKittenFront = [foo]
  return newKittenFront.concat(kittens)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten () {
  return kittens.slice(1)
}
