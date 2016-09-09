const app = "I don't do much."

function kittens () {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
  function destructivelyAppendKitten(element) {
  kittens.push(element)
return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(element) {
  kittens.unshift(element)
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
  function appendKitten(element) {
  return [...kittens, element]
}

var kittens = ["Milo", "Otis", "Garfield"]
  function prependKitten(element) {
  return [element, ...kittens]
}
var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten() {
  return kittens.slice(1)
  }

  var kittens = ["Milo", "Otis", "Garfield"]
  function removeLastKitten() {
    return kittens.slice(0, kittens.length - 1)
    }
