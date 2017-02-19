const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push('Ralph')
}
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name) {
  return kittens.unshift('Bob')
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

 var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

var kittens = ['Milo', 'Otis', 'Garfield']

function appendKitten(name) {
return [...kittens, 'Broom']
}

function prependKitten(name) {
return ["Arnold", ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
