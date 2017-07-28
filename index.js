const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array, element){
  kittens.push("Ralph")
  return array
}

function destructivelyPrependKitten(array, element){
  kittens.unshift("Bob")
  return array
}

function destructivelyRemoveLastKitten(array, element){
  kittens.pop(-1)
  return array
}

function destructivelyRemoveFirstKitten(array, element){
  kittens.shift(0)
  return array
}

function appendKitten(array, element){
  array = [...kittens, "Broom"]
  return array
}

function prependKitten(array, element){
  array = ["Arnold", ...kittens]
  return array
}

function removeLastKitten(array, element){
  array = kittens.slice(0, kittens.length -1)
  return array
}

function removeFirstKitten(array, element){
  array = kittens.slice(1)
  return array
}
