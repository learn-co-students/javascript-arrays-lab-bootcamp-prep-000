var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(element) {
  return kittens.push(element)
}
function destructivelyPrependKitten(element) {
  return kittens.unshift(element)
}

function destructivelyRemoveLastKitten(element) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(element) {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  return [...kittens, name];
 }

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten(name) {
  return kittens.slice(0, -1)
}

function removeFirstKitten(name) {
  return kittens.slice(1)
}