var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
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
  var result = [...kittens, name]
  return result
}

function prependKitten(name) {
  var result = [name, ...kittens]
  return result
}

function removeLastKitten() {
  var result = kittens
  return result.slice(0, result.length - 1)
}

function removeFirstKitten() {
  var result = kittens
  return result.slice(1)
}