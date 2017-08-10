const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(Ralph) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(Bob) {
  kittens.unshift('Bob')
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
  var moreKittens = [...kittens, Broom];
  return moreKittens
}

function prependKitten(Arnold) {
  var newKittens = [Arnold, ...kittens];
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}
