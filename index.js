const app = "I don't do much."

function kittens() {
  var kittens = ["Milo","Otis","Garfield"]
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  return [kittens,name]
}

function prependKitten(name) {
  return [name,kittens]
}

function removeLastKitten() {
  var newarray = kittens.slice(0, kittens.length-1)
  return newarray
}

function removeFirstKitten() {
  var newarray = kittens.slice(1)
  return newarray
}
