const app = "I don't do much."

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
  var newKittens = [...kittens,name]
  return newKittens
}

function prependKitten(name) {
  var newKittens = [name,...kittens]
  return newKittens
}

function removeLastKitten() {
  var n = kittens.length - 1

  return kittens.slice(0,n)
}

function removeFirstKitten() {

  return kittens.slice(1)
}
