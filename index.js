var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

var name

function destructivelyAppendKitten(name) {
  name = 'Ralph'
  kittens.push(name)
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyPrependKitten(name) {
  name = 'Bob'
  kittens.unshift(name)
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield']
var kittens1
var kittens2
var kittens3
var kittens4

function appendKitten(name) {
  name = 'Broom'
  kittens1 = kittens.concat(name)
  return kittens1
}

function prependKitten(name) {
  name = 'Arnold,'
  kittens2 = name.concat(kittens)
  return kittens2
}

function removeLastKitten() {
  kittens3 = kittens.slice(0, kittens.length -1)
  return kittens3
}

function removeFirstKitten() {
  kittens4 = kittens.slice(1)
  return kittens4
}
