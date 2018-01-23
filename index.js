function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  var morekittens = [name, ...kittens]
  return morekittens
}

function removeLastKitten() {
  var lesskittens = kittens.slice(0, 2)
  return lesskittens
}

function removeFirstKitten() {
  var lesskittens = kittens.slice(1, kittens.length + 1)
  return lesskittens
}