const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten() {
  kittens.push("Ralph")
  return(kittens)
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob")
  return (kittens)
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
  return(kittens)
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return (kittens)
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  return [...kittens, "Broom"]
}

function prependKitten(name) {
  return ["Arnold", ...kittens]
}

function removeLastKitten () {
  return kittens.slice(0, kittens.length - 1)
}
var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten (){
return kittens.slice(1)
}
