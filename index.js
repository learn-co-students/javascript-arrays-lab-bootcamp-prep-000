const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.splice(kittens.length, 0, name)
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
  var newArray = kittens.slice()
  return [...newArray, name]
}

function prependKitten(name) {
  var newArray = kittens.slice()
  return [name, ...newArray]
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}

function removeFirstKitten() {
  var newArray = kittens.slice(1, kittens.length)
  return newArray
}
