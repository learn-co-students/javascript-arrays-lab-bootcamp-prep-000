var kittens=["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  let newArr=[...kittens, name]
  return newArr
}
function prependKitten(name) {
  let newArr=[name, ...kittens]
  return newArr
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}