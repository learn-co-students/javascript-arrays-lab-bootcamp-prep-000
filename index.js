const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(a) {

  kittens.push(a)

  return kittens
}

function destructivelyPrependKitten(a) {

  kittens.unshift(a)

  return kittens
}

function destructivelyRemoveLastKitten() {

  kittens.pop()

  return kittens
}

function destructivelyRemoveFirstKitten () {

  kittens.shift()

  return kittens
}

function appendKitten(a) {

  var newArr = kittens.concat(a)
  return newArr
}

function prependKitten (a) {

  var newArr = kittens.slice(0, kittens.length)

  newArr.unshift(a)

  return newArr
}

function removeLastKitten () {

  var newArr = kittens.slice(0, kittens.length-1)

  return newArr
}

function removeFirstKitten() {

  var newArr = kittens.slice(1,kittens.length)

  return newArr
}
