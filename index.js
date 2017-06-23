const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return window.kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return window.kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return window.kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return window.kittens.shift()
}

function appendKitten(name) {
  return [...window.kittens, name]
}

function prependKitten(name) {
  return [name, ...window.kittens]
}

function removeLastKitten() {
  return window.kittens.slice(0, window.kittens.length - 1)
}

function removeFirstKitten() {
  return window.kittens.slice(1)
}
