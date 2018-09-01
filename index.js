var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten() {
  return kittens.push("Ralph")
}
function destructivelyPrependKitten() {
  return kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  var tempKittens = kittens.slice()
  tempKittens.push(name)
  return tempKittens
}
function prependKitten(name) {
  var tempKittens = kittens.slice()
  tempKittens.unshift(name)
  return tempKittens
}
function removeLastKitten() {
  var tempKittens = kittens.slice()
  tempKittens.pop()
  return tempKittens
}
function removeFirstKitten() {
  var tempKittens = kittens.slice()
  tempKittens.shift()
  return tempKittens
}