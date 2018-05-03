const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
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
  var retkitten = [...kittens,name]
  return retkitten
}

function prependKitten(name) {
  var retkitten = [name,...kittens]
  return retkitten
}

function removeLastKitten() {
  var retkitten = kittens.slice(0,-1)
  return retkitten
}

function removeFirstKitten() {
  var retkitten = kittens.slice(1)
  return retkitten
}