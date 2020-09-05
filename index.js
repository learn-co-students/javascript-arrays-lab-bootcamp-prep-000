var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

var kittens = ["Milo", "Otis", "Garfield"] //define your array here


function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

var kittens = ["Milo", "Otis", "Garfield"] //define your array here


function appendKitten(name) {
  let newKittens = kittens.concat(name)
  return newKittens
  }

var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function prependKitten(name) {
  let newKittens = [name, ...kittens]
  return newKittens
}

var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function removeLastKitten() {
  let newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}
var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function removeFirstKitten() {
  let newKittens = kittens.slice(1)
  return newKittens
}
