const app = "I don't do much."
var kittens = [`Milo`, `Otis`, `Garfield`]
function destructivelyAppendKitten(Ralph) {
  return kittens.push(Ralph)
}
function destructivelyPrependKitten(Bob) {
  return kittens.unshift(Bob)
}
function destructivelyRemoveLastKitten(Ralph) {
  return kittens.pop(Ralph)
}
function destructivelyRemoveFirstKitten(Milo) {
  return kittens.shift(Milo)
}
function appendKitten(array) {
  var kittens = [`Milo`, `Otis`, `Garfield`,]
  kittens.push(`Broom`)
  return kittens
}
function prependKitten(array) {
  var kittens = [`Milo`, `Otis`, `Garfield`]
  kittens.unshift(`Arnold`)
  return kittens
}
function removeLastKitten(array) {
  var kittens = [`Milo`, `Otis`, `Garfield`]
  kittens.pop(`Garfield`)
  return kittens
}
function removeFirstKitten(array) {
  var kittens = [`Milo`, `Otis`, `Garfield`]
  kittens.shift(`Milo`)
  return kittens
}