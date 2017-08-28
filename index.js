const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(Ralph) {
  kittens.push("Ralph")
  return kittens
}

var kittens = ["Milo","Otis","Garfield"]

function destructivelyPrependKitten(Bob) {
  kittens.unshift("Bob")
  return kittens
}

var kittens = ["Milo","Otis","Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

var kittens = ["Milo","Otis","Garfield"]

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

var kittens = ["Milo","Otis","Garfield"]

function appendKitten() {
  return [...kittens, "Broom"]
}

function prependKitten() {
  return ["Arnold",...kittens]
}

var kittens = ["Milo","Otis","Garfield"]

function removeLastKitten(removekittens) {
  removekittens=kittens.slice(0,kittens.length-1)
  return removekittens
}

function removeFirstKitten(removefirstkittens) {
  removefirstkittens=kittens.slice(1)
  return removefirstkittens
}
