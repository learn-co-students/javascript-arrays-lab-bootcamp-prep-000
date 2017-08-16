const app = "I don't do much."

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
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  const newArray = [...kittens, name]
  return newArray
}

function prependKitten(name) {
  const newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten() {
  const newArray = kittens.slice(0, kittens.length-1)
  return newArray
}

function removeFirstKitten() {
  const newArray = kittens.slice(1)
  return newArray
}

