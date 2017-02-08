const app = "I don't do much."

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
  var kittensApp = [...kittens, name]
  return kittensApp
  }
function prependKitten(name) {
  var kittensPrep = [name, ...kittens]
  return kittensPrep
}
function removeFirstKitten() {
  var kittensFirst = kittens.slice(1)
  return kittensFirst
}
function removeLastKitten() {
  var kittensLast = kittens.slice(0, kittens.length - 1)
  return kittensLast
}
