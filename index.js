const app = "I don't do much."

kittens =  ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
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

function prependKitten(kitten) {
  return [kitten, ...kittens]
}

function appendKitten(kitten) {
  return [...kittens, kitten]
}

function removeLastKitten() {
  var new_arr = kittens.slice(0,-1)
  return new_arr
}

function removeFirstKitten() {
  var new_arr = kittens.slice(1, kittens.lenght)
  return new_arr
}

