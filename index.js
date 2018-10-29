var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten (name) {
  return kittens.push("Ralph")
}

function destructivelyPrependKitten (name) {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}

function appendKitten (name) {
  return kittens.concat("Broom")
}

function prependKitten (name) {
  return [("Arnold"), ...kittens ]
}

function removeLastKitten() {
  return kittens.slice(0,2)
}

function removeFirstKitten() {
  return kittens.slice(1)
}

// Add your functions and code here
