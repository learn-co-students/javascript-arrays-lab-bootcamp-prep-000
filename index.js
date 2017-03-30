const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function kittens(kittens) {
  console.log(kittens)
}

function destructivelyAppendKitten(name) {
  kittens = [...kittens, name]
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens = [name, ...kittens]
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

function appendKitten(name) {
  const moreKittens = [...kittens, name]
  return moreKittens
}

function prependKitten(name) {
  const nothaKitten = [name, ...kittens]
  return nothaKitten
}

function removeLastKitten() {
  const kittensremove = kittens.slice(0, kittens.length - 1)
  return kittensremove
}

function removeFirstKitten() {
  const nofirstKitty = kittens.slice(1)
  return nofirstKitty
}
