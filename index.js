const app = "I don't do much."

Arrays = ["Milo", "Otis", "Garfield"]

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {

  kittens.push("Ralph")


}

function destructivelyPrependKitten(name) {

  kittens.unshift("Bob")

}

function destructivelyRemoveLastKitten(name) {

  kittens.pop()

}

function destructivelyRemoveFirstKitten(name) {

  kittens.shift()
}

function appendKitten(name) {

  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = [ ...kittens, "Broom"]
  return kittens
}

function prependKitten(name) {

  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = ["Arnold", ...kittens]
  return kittens
}

function removeLastKitten() {

  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = kittens.slice(0, kittens.length - 1);
  return kittens

}

function removeFirstKitten() {

  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = kittens.slice(1)
  return kittens
}
