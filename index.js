const app = "I don't do much."
// var kittens = window.kittens; // ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten) {
  window.kittens.push(kitten);
  // return window.kittens;
}

function destructivelyPrependKitten(kitten) {
  window.kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten() {
  window.kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift()
}

function appendKitten(kitten) {
  return [...kittens, kitten]
}

function prependKitten(kitten) {
  return [kitten, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten() {
  return kittens. slice(1)
}
