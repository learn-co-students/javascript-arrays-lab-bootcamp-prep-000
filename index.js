const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return name
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return name
}

function destructivelyRemoveLastKitten() {
  kittens.pop('name')
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift('name')
  return kittens
}

function appendKitten(name) {
  var newKittens = [...kittens, 'Broom']
  return newKittens
}

function prependKitten(name) {
  var newKittens = ['Arnold', ...kittens]
  return newKittens
}

function removeLastKitten() {
  return kittens.slice(0, 2)
}

function removeFirstKitten() {
  return kittens.slice(-2)
}
