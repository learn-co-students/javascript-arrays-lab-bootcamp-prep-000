const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var newKittens = kittens.push(name)
  return kittens
};
function destructivelyPrependKitten(name) {
  var secondNewKittens = kittens.unshift(name)
  return kittens
};
function destructivelyRemoveLastKitten() {
  var last = kittens.pop()
  return kittens
};
function destructivelyRemoveFirstKitten() {
  var first = kittens.shift()
  return kittens
};
function appendKitten(name) {
  return [...kittens, name]
};
function prependKitten(name) {
  return [name, ... kittens]
};
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}
