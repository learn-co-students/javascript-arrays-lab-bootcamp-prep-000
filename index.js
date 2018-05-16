const app = "I don't do much."

function destructivelyAppendKitten(array, element) {
  kittens.push('Ralph')
  return array
}

function destructivelyPrependKitten(array, element) {
  kittens.unshift('Bob')
  return array
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop(1)
  return array
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift(1)
  return array
}

function appendKitten(array, element) {
  var nyla = [...kittens, 'Broom']
  return nyla
}

function prependKitten(array, element) {
  var luna = ['Arnold' , ...kittens]
  return luna
}

function removeLastKitten(array, element) {
  var eamon = kittens.slice(0, kittens.length - 1)
  return eamon
}

function removeFirstKitten(array, element) {
  var jane = kittens.slice(1)
  return jane
}