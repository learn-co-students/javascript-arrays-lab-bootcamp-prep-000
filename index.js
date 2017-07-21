const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
    return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
    return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
    return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
    return kittens
}
function appendKitten(name) {
  kittens.push(name)
  return kittens.slice(-4)
}
