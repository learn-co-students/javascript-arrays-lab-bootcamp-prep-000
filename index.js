const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

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
  var moreKittens = [...kittens]
  moreKittens.push(name)
  return moreKittens
}

function prependKitten(name) {
  var moreKittens = [...kittens]
  moreKittens.unshift(name)
  return moreKittens
}

function removeLastKitten() {
  var moreKittens = [...kittens]
  moreKittens.pop()
  return moreKittens
}

function removeFirstKitten() {
  var moreKittens = [...kittens]
  moreKittens.shift()
  return moreKittens
}
