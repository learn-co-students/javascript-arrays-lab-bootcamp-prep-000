var kittens = ["Milo", "Otis", "Garfield"];

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
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var kittens1 = [...kittens, name]
  return kittens1
}

function prependKitten(name) {
  var kittens1 = [name, ...kittens]
  return kittens1
}

function removeLastKitten() {
  var kittens1 = kittens.slice(0, kittens.length - 1)
  return kittens1
}

function removeFirstKitten() {
  var kittens1 = kittens.slice(1)
  return kittens1
}
