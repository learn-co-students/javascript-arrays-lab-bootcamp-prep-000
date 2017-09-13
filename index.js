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

function appendKitten(name) {
  var akittens = [...kittens, name]
  return akittens
}

function prependKitten(name) {
  var pkittens = [name, ...kittens]
  return pkittens
}

function removeLastKitten() {
  var rlkittens = kittens.slice(0, (kittens.length - 1))
  return rlkittens
}
function removeFirstKitten() {
  var rfkittens = kittens.slice(1)
  return rfkittens
}
