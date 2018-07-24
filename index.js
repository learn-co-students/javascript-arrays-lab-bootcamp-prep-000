var kittens = ["Milo", "Otis", "Garfield"];

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
  const kittens2 = kittens.concat(name)
  return kittens2
}

function prependKitten(name) {
  const kittens2 = [name, ...kittens]
  return kittens2
}

function removeLastKitten() {
  const kittens2 = kittens.slice(0, 2)
  return kittens2
}

function removeFirstKitten() {
  const kittens2 = kittens.slice(1)
  return kittens2
}
