const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten (name) {
  kittens.shift()
}

function appendKitten(name) {
  var array = [...kittens]
  array.push(name)
  return array
}

function prependKitten(name) {
  var array = [...kittens]
  array.unshift(name)
  return array
}

function removeLastKitten(name) {
  var array = [...kittens]
  array.pop()
  return array
}

function removeFirstKitten(name) {
  var array = [...kittens]
  array.shift()
  return array
}
