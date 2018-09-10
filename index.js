function Arrays() {
kittens = ["Milo", "Otis", "Garfield"]
}

Arrays()

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

Arrays()

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

Arrays()

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

Arrays()

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

Arrays()

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

Arrays()

function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}

Arrays()

function removeLastKitten() {
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}

Arrays()

function removeFirstKitten() {
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
}