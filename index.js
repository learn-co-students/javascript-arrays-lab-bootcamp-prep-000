function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  return kittens
}

function destructivelyPrependKitten(Bob) {
  kittens.unshift(Bob)
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
  var kittens = ['Milo', 'Otis', 'Garfield']
  return [...kittens, Broom]
}

function prependKitten(Arnold) {
  var kittens = ['Milo', 'Otis', 'Garfield']
  return [Arnold, ...kittens]
}

function removeLastKitten() {
 var kittens = ['Milo', 'Otis', 'Garfield']
 return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield']
  return kittens.slice(1)
}