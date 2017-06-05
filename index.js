const app = "I don't do much."
var kittens = [
  "Milo", "Otis", "Garfield"
]

function destructivelyAppendKitten(kitty) {
  kittens.push(kitty)
}

function destructivelyPrependKitten(kitty) {
  kittens.unshift(kitty)
}

function destructivelyRemoveLastKitten(kitty) {
  kittens.pop(kitty)
}

function destructivelyRemoveFirstKitten(kitty) {
  kittens.shift(kitty)
}

function prependKitten(kitty) {
  return [kitty, ...kittens]
}

function appendKitten(kitty) {
  return [...kittens, kitty]
}

function removeFirstKitten(kitty) {
  return kittens.slice(1)
}

function removeLastKitten(kitty) {
  return kittens.slice(0, kittens.length - 1)
}
