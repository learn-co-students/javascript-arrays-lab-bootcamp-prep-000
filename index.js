const app = "I don't do much."
let kittens = ["Milo", "Otis", "Garfield"];

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
  let temp = [...kittens]
  temp.push(name)
  return temp
}

function prependKitten(name) {
  let temp = [...kittens]
  temp.unshift(name)
  return temp
}

function removeLastKitten() {
  let temp = [...kittens]
  temp.pop(name)
  return temp
}

function removeFirstKitten() {
  let temp = [...kittens]
  temp.shift(name)
  return temp
}
