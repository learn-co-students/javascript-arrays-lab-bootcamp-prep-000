var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(el) {
  kittens.push(el)
}

function destructivelyPrependKitten(el) {
  kittens.unshift(el)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(el) {
  let newArray = [...kittens, el]
  return newArray
}

function prependKitten(el) {
  let newArray = [el, ...kittens]
  return newArray
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
