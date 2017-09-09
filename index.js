var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(cat) {
  return kittens.push(cat)
}

function destructivelyPrependKitten(cat) {
  return kittens.unshift(cat)
}

function destructivelyRemoveLastKitten(cat) {
  return kittens.pop(cat)
}

function destructivelyRemoveFirstKitten(cat) {
  return kittens.shift(cat)
}

function appendKitten(cat) {
  const addKitten = [...kittens, cat]
  return addKitten
}

function prependKitten(cat) {
  const addKitten = [cat, ...kittens]
  return addKitten
}

function removeLastKitten() {
  const removeKitten = kittens.slice(0, 2)
  return removeKitten
}

function removeFirstKitten() {
  const removeKitten = kittens.slice(-2)
  return removeKitten
}
