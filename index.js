const app = "I don't do much."
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(Name) {
kittens.push(Name)
}
function destructivelyPrependKitten(Name) { kittens.unshift(Name)
}
function destructivelyRemoveLastKitten() { kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
  return[...kittens, name]
}
function prependKitten(name) {
  return[name,...kittens]
}
function removeLastKitten() {
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}