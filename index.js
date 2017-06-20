const app = "I don't do much."

function destructivelyAppendKitten() {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(2)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens
}

function appendKitten() {
  return [...kittens, "Broom"]
}

function prependKitten() {
  return ["Arnold", ...kittens]
}

function removeLastKitten(){
  var kitt = kittens.slice(0, kittens.length -1)
  return kitt
}

function removeFirstKitten(){
  var kit = kittens.slice(1)
  return kit
}
