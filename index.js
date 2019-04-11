var kittens = ["Milo", "Otis", "Garfield"]

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

const appendKitten = name => [...kittens, name]
const prependKitten = name => [name, ...kittens]
const removeLastKitten = () => kittens.slice(0, kittens.length - 1)
const removeFirstKitten = () => kittens.slice(1)
