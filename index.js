const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}


function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}


function destructivelyRemoveLastKitten(name)  {
  kittens.pop(name)
  return kittens
}


function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}


function appendKitten(kitten) {
return [...kittens, kitten]
}

function prependKitten(kitten) {
  return [kitten, ...kittens]
}

function removeLastKitten(kitten) {
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(kitten) {
  return kittens.slice(1)
}
