const app = "I don't do much."

function destructivelyAppendKitten(name){
    kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  var moreKittens = kittens.slice(0, 2)
  return moreKittens
}

function removeFirstKitten() {
  var lessKittens = kittens.slice(1)
  return lessKittens
}
