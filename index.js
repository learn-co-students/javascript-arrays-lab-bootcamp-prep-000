const app = "I don't do much."

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

function appendKitten(kitten){
  var newKittens = [...kittens, kitten]
  return newKittens
}

function prependKitten(kitten) {
  var newKittens = [kitten, ...kittens]
  return newKittens
}

function removeLastKitten(kitten) {
  var newKittens = kittens.slice(0,kittens.length - 1)
  return newKittens
}

function removeFirstKitten(kitten){
  var newKittens = kittens.slice(1)
  return newKittens
}
