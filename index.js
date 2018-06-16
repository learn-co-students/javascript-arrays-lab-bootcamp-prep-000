const app = "I don't do much."
function destructivelyAppendKitten(array) {
  kittens.push(array)
}

function destructivelyPrependKitten(array) {
  kittens.unshift(array)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(array) {
  var  output = [...kittens,array]
  return output
}

function prependKitten(array) {
  var  output = [array,...kittens]
  return output
}

function removeLastKitten() {
  return kittens.slice(0,2)
}

function removeFirstKitten() {
  return kittens.slice(1)
}