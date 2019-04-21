var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  var newarr = [name, ...kittens]
  return newarr
}

function removeLastKitten(element) {
  var newarr = kittens.slice(0, kittens.length-1)
  return newarr
}

function removeFirstKitten(element) {
  var newarr = kittens.slice(0)
  return newarr
}
