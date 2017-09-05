var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
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

function appendKitten(kitten) {
  var newArray = [...kittens, kitten]
  return newArray
}

function prependKitten(kitten) {
  var newArray = [kitten, ...kittens]
  return newArray
}

function removeLastKitten() {
  var newArray = kittens.slice(0, -1)
  return newArray
}

function removeFirstKitten() {
  var newArray = kittens.slice(1)
  return newArray
}
