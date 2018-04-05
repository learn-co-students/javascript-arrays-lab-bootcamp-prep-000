const app = "I don't do much."

function destructivelyAppendKitten(name) {
  window.kittens.push(name)
}

function destructivelyPrependKitten(name) {
  window.kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  window.kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  window.kittens.shift(name)
}

function appendKitten(name) {
  return window.kittens.concat(new Array(name))
}

function prependKitten(name) {
  return (new Array(name)).concat(window.kittens)
}

function removeLastKitten() {
  return window.kittens.slice(0, window.kittens.length - 1)
}

function removeFirstKitten() {
  return window.kittens.slice(1)
}