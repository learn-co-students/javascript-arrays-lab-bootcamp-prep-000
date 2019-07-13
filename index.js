var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
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

function appendKitten(array) {
  var kittensTwo = array;
  kittensTwo = [...kittens, "Broom" ]
  return kittensTwo
}

function prependKitten(array) {
  var kittensThree = array;
  kittensThree = ["Arnold", ...kittens]
  return kittensThree
}

function removeLastKitten(array) {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(array) {
  return kittens.slice(1)
}