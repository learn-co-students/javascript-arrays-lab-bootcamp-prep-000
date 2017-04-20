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
[...kittens, newKitty]
  return kittens;
}
