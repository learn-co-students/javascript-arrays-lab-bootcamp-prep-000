const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (kitten) {
  kittens.push(kitten)
}

function destructivelyPrependKitten (kitten) {
  kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
}

function appendKitten (kitten) {
  var moreKittens = [...kittens, kitten]
  return moreKittens
}

function prependKitten (kitten) {
  var moreKittens = [kitten, ...kittens]
  return moreKittens
}

function removeLastKitten () {
  var lessKittens = kittens.slice(0,kittens.length-1)
  return lessKittens
}

function removeFirstKitten () {
  var lessKittens = kittens.slice(1)
  return lessKittens
}
