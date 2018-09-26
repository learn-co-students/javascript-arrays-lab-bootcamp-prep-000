// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name); return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(name) {
  kittens.unshift(name); return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten() {
  kittens.pop(); return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten() {
  kittens.shift(); return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];

function prependKitten(name) {
 return Array(name).concat(kittens)
}

var kittens = ["Milo", "Otis", "Garfield"];

function appendKitten(name) {
  return kittens.concat(name)
}

var kittens = ["Milo", "Otis", "Garfield"];

function removeLastKitten() {
  return kittens.slice(0,-1)
}

var kittens = ["Milo", "Otis", "Garfield"];

function removeFirstKitten() {
  return kittens.slice(1)}