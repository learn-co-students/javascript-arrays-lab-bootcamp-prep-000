var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  let newArray = [...kittens, name]
  return newArray
}

function prependKitten(name) {
  let newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten() {
  let newArray = kittens.slice(0, kittens.length-1)
  return newArray
}

function removeFirstKitten() {
  let newArray = kittens.slice(1)
  return newArray
}