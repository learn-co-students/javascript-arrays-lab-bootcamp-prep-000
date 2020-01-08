var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten () {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten () {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(3)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
}

function appendKitten() {
  const kittens1 = [...kittens, "Broom"];
  return kittens1
}

function prependKitten() {
  const kittens2 = ["Arnold", ...kittens]
  return kittens2
}

function removeLastKitten(){
    return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
    return kittens.slice(1)
}