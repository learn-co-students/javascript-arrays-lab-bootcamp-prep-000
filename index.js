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
  var kittensArr = [...kittens, name]
  return kittensArr
}
function prependKitten(name) {
  var kittensArr = [name, ...kittens]
  return kittensArr
}
function removeLastKitten() {
  var kittensArr = kittens.slice(0, kittens.length - 1)
  return kittensArr
}
function removeFirstKitten() {
  var kittensArr = kittens.slice(1)
  return kittensArr
}
