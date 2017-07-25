const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function Arrays(
  kittens = ['Milo', 'Otis', 'Garfield']
){}

function destructivelyAppendKitten(Arrays) {
  kittens = [...kittens, 'Ralph']
}

function destructivelyPrependKitten(Arrays) {
  kittens = ['Bob', ...kittens]
}

function destructivelyRemoveLastKitten() {
  kittens = kittens.slice(0, kittens.length - 1)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(Arrays) {
  const moreKittens = [...kittens, 'Broom']
  return moreKittens
}

function prependKitten(Arrays) {
  const moreKittens = ['Arnold', ...kittens]
  return moreKittens
}

function removeLastKitten() {
  const lessKittens = kittens.slice(0, kittens.length - 1)
  return lessKittens
}

function removeFirstKitten() {
  const lessKittens = kittens.slice(-2)
  return lessKittens
}
