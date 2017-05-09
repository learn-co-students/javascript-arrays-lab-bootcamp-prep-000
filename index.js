const app = "I don't do much."
const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(x) {
  kittens.push(x)
}

function destructivelyPrependKitten(x) {
  kittens.unshift(x)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(x) {
  const y = [x]
  const newArray = kittens.concat(y)
  return newArray
}

function prependKitten(x) {
  const y = [x]
  const new_array = y.concat(kittens)
  return new_array
}

function removeLastKitten() {
  return kittens.filter(i => i !== kittens[kittens.length-1])
}

function removeFirstKitten() {
  return kittens.filter(i => i !== kittens[0])
}
