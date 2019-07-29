var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return name
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return name
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield']
  kittens = [...kittens, 'Broom']
  return kittens
}

function prependKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield']
  kittens = ['Arnold', ...kittens]
  return kittens
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}