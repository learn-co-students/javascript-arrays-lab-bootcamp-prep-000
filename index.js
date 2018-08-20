var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten() {
  return kittens.push('Ralph')
}

function destructivelyPrependKitten() {
  return kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten() {
  var newKittens = kittens.concat('Broom')
  return newKittens
}

function prependKitten() {
  var newKittens = ['Arnold',...kittens]
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0,2)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(-2)
  return newKittens
}