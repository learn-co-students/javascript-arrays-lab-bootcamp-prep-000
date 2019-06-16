var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name) {
  kittens.push(name)
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
}

function appendKitten(name) {
  var newarray = [...kittens, name];
  return newarray
}

function prependKitten(name) {
  var newarray = [name, ...kittens]
  return newarray
}

function removeLastKitten() {
  var newarray = kittens.slice(0, kittens.length - 1)
  return newarray
}

function removeFirstKitten() {
  var newarray = kittens.slice(1, kittens.length)
  return newarray
}