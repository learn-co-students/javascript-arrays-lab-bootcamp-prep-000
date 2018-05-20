const app = "I don't do much."

function destructivelyAppendKitten(name) {
  window.kittens.push(name)
  return window.kittens
}

function destructivelyPrependKitten(name) {
  window.kittens.unshift(name)
  return window.kittens
}

function destructivelyRemoveLastKitten(name) {
  window.kittens.pop()
  return window.kittens
}

function destructivelyRemoveFirstKitten(name) {
  window.kittens.shift()
  return window.kittens
}

function appendKitten(name) {
  return [...window.kittens,name]
}

function prependKitten(name) {
  return [name,...window.kittens]
}

function removeLastKitten() {
  return window.kittens.slice(0, window.kittens.length - 1)
}

function removeFirstKitten() {
  return window.kittens.slice(1)
}
