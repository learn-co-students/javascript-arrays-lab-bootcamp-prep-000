const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  return kittens
}

function destructivelyPrependKitten(Ralph) {
  kittens.unshift(Ralph)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(Broom) {
  const moreKittens = [...kittens, 'Broom']
  return moreKittens
}

function prependKitten(Arnold) {
  const masKittens = ['Arnold', ...kittens]
  return masKittens
}

function removeLastKitten() {
  const lessKittens = kittens.slice(0, kittens.length -1)
  return lessKittens
}

function removeFirstKitten() {
  const menosKittens = kittens.slice(1)
  return menosKittens
}
