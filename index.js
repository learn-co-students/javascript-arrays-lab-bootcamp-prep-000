const app = "I don't do much."
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

function appendKitten(name) {
var mmkittens= [...kittens, name]
return mmkittens

}
function prependKitten(name) {
  var mkittens = [name, ...kittens]
  return mkittens

}
function removeLastKitten() {
  var mkittens = kittens.slice(0, kittens.length -1)
  return mkittens
}

function removeFirstKitten() {

  var mkittens = kittens.slice(1)
  return mkittens

}
