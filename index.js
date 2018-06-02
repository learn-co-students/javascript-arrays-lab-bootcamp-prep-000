const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  let newName = [...kittens, name]
  return newName
}

function prependKitten(name) {
  let newName = [name, ...kittens]
  return newName
}

function removeLastKitten() {
  let newName = kittens.slice(0, kittens.length - 1)
  return newName
}

function removeFirstKitten() {
  let newName = kittens.slice(1)
  return newName
}