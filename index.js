const app = "I don't do much."

const kittens = [
  `Milo`,
  `Otis`,
  `Garfield`
]

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
  var newArray = kittens.concat(name)
  return newArray
}

function prependKitten(name) {
  var moreKittens = [name,...kittens]
  return moreKittens
}

function removeLastKitten() {
  var evenMoreKittens = kittens.slice(0, kittens.length - 1)
  return evenMoreKittens
}

function removeFirstKitten() {
  var oneLessKitten = kittens.slice(1)
  return oneLessKitten
}
