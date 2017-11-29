const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift(1)
}

function prependKitten(name) {
  var morekittens =  [name, ...kittens]
  return morekittens
}

function appendKitten(name) {
  var morekittens = [...kittens, name]
  return morekittens
}

function removeLastKitten() {
  return kittens.slice(0,-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
