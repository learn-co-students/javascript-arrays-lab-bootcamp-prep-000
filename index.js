var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function() {
  return kittens.push("Ralph")
}

var destructivelyPrependKitten = function() {
  return kittens.unshift("Bob")
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift()
  return kittens
}

var appendKitten = function() {
  return [...kittens, "Broom"]
}

var prependKitten = function() {
  return ["Arnold", ...kittens]
}

var removeLastKitten = function() {
  return kittens.slice(0, kittens.length - 1)
}

var removeFirstKitten = function() {
  return kittens.slice(1)
}