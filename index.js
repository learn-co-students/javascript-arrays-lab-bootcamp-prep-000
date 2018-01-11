const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}

function prependKitten(name) {
  var newK = [...kittens]
  newK.unshift(name)
  return newK
}

function removeLastKitten() {
  var newK = [...kittens]
  newK.pop()
  return newK
}

function removeFirstKitten() {
  var newKittens = kittens.slice()
  newKittens.shift()
  return newKittens
}