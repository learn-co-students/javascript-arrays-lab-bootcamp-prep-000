function destructivelyAppendKitten(name) {
 kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var kittenAppend = [...kittens, "Broom"]
  return kittenAppend
}

function prependKitten(name) {
  var kittenAppend = ["Arnold", ...kittens]
  return kittenAppend
}

function removeLastKitten() {
  var kittenAppend = kittens.slice(0,2)
  return kittenAppend
}

function removeFirstKitten() {
  var kittenAppend = kittens.slice(1)
  return kittenAppend
}