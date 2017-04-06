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

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  var kittensNew = [...kittens, name]
  return kittensNew
}

function prependKitten(name) {
  var kittensNew = [name, ...kittens]
  return kittensNew
}

function removeLastKitten(name) {
  var kittensNew = kittens.slice(0, kittens.length - 1)
  return kittensNew
}

function removeFirstKitten(name) {
  var kittensNew = kittens.slice(1)
  return kittensNew
}
