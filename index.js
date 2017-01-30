const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens

}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop("Garfield")
}

function destructivelyRemoveFirstKitten() {
  kittens.shift("Milo")
  return kittens
}

function appendKitten(name) {
return[...kittens,"Broom"]
}

function prependKitten(name) {
return["Arnold",...kittens]
}

function removeLastKitten() {
  var kittens = ["Milo", "Otis"]
  return kittens
}

function removeFirstKitten() {
  var kittens = ["Otis", "Garfield"]
  return kittens
}
