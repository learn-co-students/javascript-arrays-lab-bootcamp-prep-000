const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var akittens = [...kittens, name]
  return akittens
}

function prependKitten(name) {
  var bkittens = [name, ...kittens]
  return bkittens
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length -1)

}

function removeFirstKitten(name) {
  return kittens.slice(1)

}
