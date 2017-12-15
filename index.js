const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  name = kittens.push('Ralph')
  return name
}

function destructivelyPrependKitten(name) {
  name = kittens.unshift('Bob')
  return name
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  name = [...kittens, "Broom"]
  return name
}

function prependKitten(name) {
  name = ["Arnold", ...kittens]
  return name
}

function removeLastKitten() {
  name = kittens.slice(0, kittens.length - 1)
  return name
}

function removeFirstKitten() {
  name = kittens.slice(1)
  return name
}
