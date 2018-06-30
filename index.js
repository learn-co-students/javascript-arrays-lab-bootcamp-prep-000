const app = "I don't do much."
kittens = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendKitten(s) {
  return kittens.push(s);
}

function destructivelyPrependKitten(s) {
  return kittens.unshift(s);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(s) {
  return [...kittens, s]
}

function prependKittens(s) {
  return [s,...kittens]
}

function removeLastKitten() {
  return kittens.splice(0,kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.splice(1)
}
