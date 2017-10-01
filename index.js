var kittens = ['Milo', 'Otis', 'Garfield']

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
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var a = [...kittens]
  a.push(name)
  return a
}

function prependKitten(name) {
  var a = [...kittens]
  a.unshift(name)
  return a
}

function removeLastKitten() {
  var a = [...kittens]
  a.pop()
  return a
}

function removeFirstKitten() {
  var a = [...kittens]
  a.shift()
  return a
}
