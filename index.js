var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens.splice(3, 0, "Ralph")
}

function destructivelyPrependKitten(Bob) {
  kittens.splice(0, 0, "Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(Broom) {
  return [...kittens, Broom]
}

function prependKitten(Arnold) {
  return [Arnold, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}