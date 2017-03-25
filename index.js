//const app = "I don't do much."
//kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var x = kittens.push(name)
  return x
}
//var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name) {
    var x = kittens.unshift(name)
    return x
}

function destructivelyRemoveLastKitten() {
  var x = kittens.pop()
  return x
}

function destructivelyRemoveFirstKitten() {
  var x = kittens.shift()
}
function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  var x = kittens.slice(0, kittens.length-1)
  return x
}

function removeFirstKitten() {
  return kittens.slice(1)
}
