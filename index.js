var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten() {
kittens.push("Ralph")
return kittens
}
function destructivelyPrependKitten() {
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop(-1)
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(1)
  return kittens
}
function appendKitten(name) {
  var moreKittens = [...kittens, name]
  return moreKittens
  return kittens
}
function prependKitten(name) {
  var moreKittens = [name, ...kittens]
  return moreKittens
  return kittens
}
function removeLastKitten() {
  return kittens.slice(0, 2)
  return kittens
}
function removeFirstKitten() {
  return kittens.slice(1)
  return kittens
}
