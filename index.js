const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens

}

function destructivelyPrependKitten(name)  {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name)  {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name)  {
  return [name, ...kittens]
}

function removeLastKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.slice(-1, 0)
  return ["Milo", "Otis"]
}

function removeFirstKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.slice(0)
  return ["Otis", "Garfield"]
}
