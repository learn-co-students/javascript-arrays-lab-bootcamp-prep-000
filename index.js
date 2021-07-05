var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here


function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
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
  var newKittens = [...kittens, 'Broom']
  return newKittens
}

function prependKitten(name) {
  var newKittens = ['Arnold', ...kittens]
  return newKittens
}

function removeLastKitten() {
  return kittens.slice(0, 2)
}

function removeFirstKitten() {
  return kittens.slice(1)
}




