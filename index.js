const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element) {
  kittens.push(element)
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(element) {
  var array1 = [...kittens, element]
  return array1
}

function prependKitten(element) {
  var array1 = [element, ...kittens]
  return array1
}

function removeLastKitten() {
  var array1 = kittens.slice(0,kittens.length - 1)
  return array1
}
function removeFirstKitten() {
  var array1 = kittens.slice(1)
  return array1
}
