var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(){
  var appendKittens = [...kittens, "Broom"]
  return appendKittens
}

function prependKitten(){
  var prependKittens = ["Arnold", ...kittens]
  return prependKittens
}

function removeLastKitten(){
  var lastkitten = kittens.slice(0, kittens.length - 1)
  return lastkitten
}

function removeFirstKitten(){
  var removekitten = kittens.slice(1)
  return removekitten
}
