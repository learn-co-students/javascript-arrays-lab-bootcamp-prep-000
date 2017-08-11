const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  return [ ...kittens, name]
}

function prependKitten(name) {
    return [name, ...kittens]
}

function removeLastKitten(name) {
  var newkittens = kittens.slice(0, kittens.length -1)
  return newkittens
}

function removeFirstKitten() {
  var newkittens = kittens.slice(1, kittens.length)
  return newkittens
}
