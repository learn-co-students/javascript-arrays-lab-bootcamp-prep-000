var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

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
  const newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  const newKittens = [name, ...kittens]
  return newKittens
}

function removeFirstKitten() {
  const newKittens = kittens.slice(1)
  return newKittens
}

function removeLastKitten() {
  const newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}



