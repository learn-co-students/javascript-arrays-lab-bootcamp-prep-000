var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

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
  var newArray = [...kittens, name]
  return newArray
}

appendKitten("Broom")

function prependKitten(name) {
  var newArray = [name, ...kittens,]
  return newArray
}

prependKitten("levi")

appendKitten("Broom")

function removeLastKitten() {
  var newArray = kittens.slice(0, -1)
  return newArray
}

removeLastKitten()

function removeFirstKitten() {
  var newArray = kittens.slice(1)
  return newArray
}

removeFirstKitten()

