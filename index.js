var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var newKittens = kittens.push('Ralph')
  return newKittens
}

function destructivelyPrependKitten(name) {
  var newKittens = kittens.unshift('Bob')
  return newKittens
}

function destructivelyRemoveLastKitten() {
  var newKittens = kittens.pop()
  return newKittens
}

function destructivelyRemoveFirstKitten() {
  var newKittens = kittens.shift()
  return newKittens
}

function appendKitten(name) {
  var newKittens = [...kittens, 'Broom']
  return newKittens
}

function prependKitten(name) {
  var newKittens = ['Arnold',...kittens]
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length -1)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}