const app = "I don't do much."

function destructivelyAppendKitten(cat) {
  kittens.push (cat)
  return kittens
}

function destructivelyPrependKitten(cat) {
  kittens.unshift (cat)
  return kittens
}

function destructivelyRemoveLastKitten(cat) {
  kittens.pop (cat)
  return kittens
}

function destructivelyRemoveFirstKitten(cat) {
  kittens.shift (cat)
  return kittens
}

function appendKitten(cat) {
  return [...kittens, cat]
}

function prependKitten(cat) {
  return [cat, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(-2)
}
