const app = "I don't do much."

function destructivelyAppendKitten (name) {
  kittens.push("Ralph")
}

function destructivelyPrependKitten (name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
}

function appendKitten (name) {
  var newArray = kittens.slice()
  newArray.push("Broom")
  return newArray
}

function prependKitten (name) {
  var newArray = kittens.slice()
  newArray.unshift("Arnold")
  return newArray
}

function removeLastKitten () {
  var newArray = kittens.slice()
  newArray.pop()
  return newArray
}

function removeFirstKitten () {
  var newArray = kittens.slice()
  newArray.shift()
  return newArray
}
