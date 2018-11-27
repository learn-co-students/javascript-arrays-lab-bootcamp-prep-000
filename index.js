var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten() {
  destructivelyAppendKitten = kittens.push("Ralph")
  return destructivelyAppendKitten
}

function destructivelyPrependKitten () {
  destructivelyPrependKitten = kittens.unshift("Bob")
  return destructivelyPrependKitten
}

function destructivelyRemoveLastKitten() {
  destructivelyRemoveLastKitten = kittens.pop()
  return destructivelyRemoveLastKitten
}

function destructivelyRemoveFirstKitten() {
  destructivelyRemoveFirstKitten = kittens.shift()
  return destructivelyRemoveFirstKitten
}

function appendKitten () {
  appendKitten = [...kittens, "Broom",]
  return appendKitten
}

function prependKitten() {
  prependKitten = ["Arnold", ...kittens]
  return prependKitten
}

function removeLastKitten() {
  removeLastKitten = kittens.slice(0, kittens.length - 1)
  return removeLastKitten
}

function removeFirstKitten() {
  removeFirstKitten = kittens.slice(1, kittens.length)
  return removeFirstKitten
}
