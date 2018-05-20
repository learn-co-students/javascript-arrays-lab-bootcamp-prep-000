const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return window.kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return window.kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return window.kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return window.kittens
}

function appendKitten(name) {
  return [...kittens,name]
}

function prependKitten(name) {
  return [name,...kittens]
}

function removeLastKitten() {
  return window.kittens.slice(0, window.kittens.length - 1)
}

function removeFirstKitten() {
  return window.kittens.slice(1)
}
