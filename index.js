const app = "I don't do much."

function destructivelyAppendKitten(newKitty) {
  kittens.push(newKitty)
  return kittens;
}

function destructivelyPrependKitten(newKitty) {
  kittens.unshift(newKitty)
  return kittens;
}

function destructivelyRemoveLastKitten(newKitty) {
  kittens.pop(newKitty)
  return kittens;
}

function destructivelyRemoveFirstKitten(newKitty) {
  kittens.shift(newKitty)
  return kittens;
}

function appendKitten(newKitty) {
  return [...kittens, newKitty]
  //THIS ONE DID NOT CLICK WITH ME!
}

function prependKitten(newKitty) {
  return [newKitty, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
