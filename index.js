function destructivelyAppendKitten(name) {
kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  [...kittens, name]
  return [...kittens, name]
}

function prependKitten(name) {
  [name, ...kittens]
return [name, ...kittens]
}

function removeLastKitten() {
  kittens.slice(0, kittens.length - 1)
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  kittens.slice(1)
  return kittens.slice(1)
}
