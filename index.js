var kittens = ["Milo", "Otis", "Garfield"]

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
  var morecats = kittens.concat(name)
  return morecats
}

function prependKitten(name) {
  var evenmorecats = [name].concat(kittens)
  return evenmorecats
}

function removeLastKitten() {
  var lesscats = kittens.slice(0, 2)
  return lesscats
}

function removeFirstKitten() {
  var byemilo = kittens.slice(1)
  return byemilo
}