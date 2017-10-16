var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return destructivelyAppendKitten
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return destructivelyPrependKitten
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return destructivelyRemoveLastKitten
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return destructivelyRemoveFirstKitten
}
function appendKitten(name) {
  appendKitten = [...kittens, 'Broom']
  return appendKitten
}
function prependKitten(name) {
  prependKitten = ['Arnold', ...kittens]
  return prependKitten
}
function removeLastKitten() {
  removeLastKitten = kittens.slice(0, kittens.length - 1)
  return removeLastKitten
}
function removeFirstKitten() {
  removeFirstKitten = kittens.slice(1)
  return removeFirstKitten
}
