const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
    kittens.push("Ralph");
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop([2])
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name){
const appendKitten = [...kittens, "Broom"]
  return appendKitten

}

var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name) {
  const prependKitten = ["Arnold", ...kittens]
  return prependKitten
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten() {
  var removeLastKitten = kittens.slice(0, 2);
  return removeLastKitten
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten(){
  var removeFirstKitten = kittens.slice(-2);
  return removeFirstKitten
}
