/*
  In our test file, we're going to reset this array to your initial value after every test.
  Some of our tests manipulate arrays in place, and we want to be sure that we can get back to a blank slate between tests.
*/

var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveLastKitten() {
  kittens.pop()
}

var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

var kittens = ['Milo', 'Otis', 'Garfield']
function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

var kittens = ['Milo', 'Otis', 'Garfield']
function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}

var kittens = ['Milo', 'Otis', 'Garfield']
function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}

var kittens = ['Milo', 'Otis', 'Garfield']
function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}
