const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten (name) {
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  var arr1 = [name, ...kittens]
  return arr1
}

function removeLastKitten () {
return kittens.slice(0,2)
}

function removeFirstKitten () {
return kittens.slice(1)
}
function destructivelyAppendKitten (element) {
  var arr1 = kittens.push(element)
  return arr1
}
function destructivelyPrependKitten (name) {
var arr1 = kittens.unshift(name)
return arr1
}
function destructivelyRemoveLastKitten() {
  var arr1 = kittens.pop()
  return arr1
}
function destructivelyRemoveFirstKitten () {
  var arr1 = kittens.shift()
  return arr1
}
