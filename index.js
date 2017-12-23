const app = "I don't do much."
kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}

function appendKitten(name) {
  return 
}

function prependKitten(name) {
  var preprendKittenArray = [name,...kittens]
  return preprendKittenArray
}

function appendKitten(name) {
  var appendKittenArray = [...kittens, name]
  return appendKittenArray
}

function removeLastKitten() {
  return kittens.slice(0, -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}