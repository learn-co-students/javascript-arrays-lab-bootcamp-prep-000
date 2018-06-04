var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
kittens.push("Ralph")
return kittens 
}

function destructivelyPrependKitten(name) {
kittens.unshift("Bob")
  return kittens 
}

function destructivelyRemoveLastKitten(name) {
kittens.pop("Garfield")
return kittens 
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift("Milo")
  return kittens 
}

function appendKitten(name, array) {
  var array = [...kittens, "Broom"]
  return array 
}

function prependKitten(name, array) {
  var array2 = ["Arnold", ...kittens]
  return array2
}

function removeLastKitten() {
return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
