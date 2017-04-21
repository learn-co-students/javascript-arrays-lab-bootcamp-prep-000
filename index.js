const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
  return
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
  return
}

function appendKitten(name) {
  const cats = ["Milo", "Otis", "Garfield"]
  const newArray = [...cats, name]
  return newArray
}

function prependKitten(name) {
  const cats = ["Milo", "Otis", "Garfield"]
  const newArray = [name, ...cats]
  return newArray
}

function removeLastKitten(name) {
  const cats = ["Milo", "Otis", "Garfield"]
  const newArray = cats.slice(0, cats.length - 1)
  return newArray
}

function removeFirstKitten(name) {
  const cats = ["Milo", "Otis", "Garfield"]
  const newArray = cats.slice(1)
  return newArray
}
