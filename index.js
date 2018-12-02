var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var newkittens = [...kittens, name]
  return newkittens
}

function prependKitten(name) {
  var newerkittens = [name, ...kittens]
  return newerkittens
}

function removeLastKitten(name) {
  var keetens = kittens.slice(0, kittens.length - 1)
  return keetens
}

function removeFirstKitten(name) {
  var newishkittens = kittens.slice(1)
  return newishkittens
}
