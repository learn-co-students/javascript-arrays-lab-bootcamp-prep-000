function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveFirstKitten() {
  kittens.splice(0,1)
}
function appendKitten(name) {
  var NewKittens = [...kittens, name]
  return NewKittens
}
function prependKitten(name) {
  var NewerKittens = [name,...kittens]
  return NewerKittens
}
function removeLastKitten() {
  var ReKitten = kittens.slice(0, kittens.length - 1)
  return ReKitten
}
function removeFirstKitten() {
  var ReFirstKitten = kittens.slice(1)
  return ReFirstKitten
}
