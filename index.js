var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(array) {
  array.shift()
  return kittens
}

function appendKitten(name) {
}

function prependKitten(name) {

}

function removeLastKitten() {

}

function removeFirstKitten() {

}
