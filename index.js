var kitten = ['milo', 'otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  var newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten(name) {
  var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}

function removeFirstKitten(name) {
  var newKittens = kittens.slice(1)
  return newKittens
}