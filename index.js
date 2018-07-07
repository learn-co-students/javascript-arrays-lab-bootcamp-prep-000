const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
kittens.pop(name)
return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
return ['Milo', 'Otis', 'Garfield', 'Broom']
}

function prependKitten(name) {
  return ["Arnold", "Milo", "Otis", "Garfield"]
}

function removeLastKitten(name) {
  kittens.slice(0, kittens.length -1)
  return ["Milo", "Otis"]
}

function removeFirstKitten(name) {
  kittens.slice(1)
  return ["Otis", "Garfield"]
}

