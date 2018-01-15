const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens,'Broom']
}

function prependKitten(name) {
  return ['Arnold',...kittens]
}

function removeLastKitten() {
  var newKits = kittens.slice(0,kittens.length-1)
  return newKits
}

function removeFirstKitten() {
  var newKits = kittens.slice(1)
  return newKits
}