var kitten = ["Milo", "Otis", "Garfield"];

function removeFirstKitten() {
  return kitten.slice(1)
kitten = kitten.slice(1)
}

function removeLastKitten() {
return kitten.slice(0, kitten.length-1)
kitten = kitten.slice(0, kitten.length-1)
}

function prependKitten(name) {
return ["Arnold", ...kittens]
}

function appendKitten(name) {
  return [...kittens, name]
}

function destructivelyAppendKitten(kitten) {
  kittens.push("Ralph")
  return kitten
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift("Bob")
  return kitten
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
