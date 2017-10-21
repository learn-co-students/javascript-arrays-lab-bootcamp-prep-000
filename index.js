const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var moreKittens = [...kittens, name]
  return moreKittens
}

function prependKitten(name) {
  var moreKittens = [name, ...kittens]
  return moreKittens
}

function removeLastKitten() {
  var lessKittens = kittens.slice(0, -1)
  return lessKittens
}

function removeFirstKitten() {
  var lessKittens = kittens.slice(1)
  return lessKittens
}
