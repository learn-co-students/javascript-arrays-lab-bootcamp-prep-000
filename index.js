const  kittens = ["Milo", "Otis", "Garfield"]

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

function appendKitten(name) {
  var newArray = kittens.slice(0)
  newArray.push(name)
  return newArray
}

function prependKitten(name) {
  var newArray = kittens.slice(0)
  newArray.unshift(name)
  return newArray
}

function removeLastKitten() {
  var newArray = kittens.slice(0)
  newArray.pop()
  return newArray
}

function removeFirstKitten() {
  var newArray = kittens.slice(0)
  newArray.shift()
  return newArray
}
