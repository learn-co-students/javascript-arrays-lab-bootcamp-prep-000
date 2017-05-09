const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var kittensTwo = [...kittens, name]
  return kittensTwo
}

function prependKitten(name) {
  var kittensTwo = [name, ...kittens]
  return kittensTwo
}

function removeLastKitten() {
  var kittensTwo = kittens.slice(0, (kittens.length - 1))
  return kittensTwo
}

function removeFirstKitten() {
  var kittensTwo = kittens.slice(1, kittens.length)
  return kittensTwo
}

