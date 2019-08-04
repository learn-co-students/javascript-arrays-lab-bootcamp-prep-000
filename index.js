var kittens = ["Milo", "Otis", "Garfield"]//define your array here

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
  var array = kittens.concat(name)
  return array
}

function prependKitten(name) {
  var array1 = name + ","
  var array2 = kittens.slice(0)
  var array3 = array1.concat(array2)
  return array3
}

function removeLastKitten(array) {
  var array = kittens.slice(0, -1)
  return array
}

function removeFirstKitten(array) {
  var array = kittens.slice(1)
  return array
}
