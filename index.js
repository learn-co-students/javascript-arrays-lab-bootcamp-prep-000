const app = "I don't do much."

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
  const newarray = [...kittens, name]
  return newarray
}

function prependKitten(name) {
  const newarray = [name, ...kittens]
  return newarray
}

function removeLastKitten() {
  const newarray = kittens.slice(0, kittens.length - 1)
  return newarray
}

function removeFirstKitten() {
  const newarray = kittens.slice(1)
  return newarray
}
