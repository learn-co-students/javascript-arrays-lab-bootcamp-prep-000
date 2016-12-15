const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name)
};
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
};
function destructivelyRemoveLastKitten() {
  return kittens.pop()
};
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
};
function appendKitten(name) {
  var array = [...kittens, name]
  return array
};
function prependKitten(name) {
  var array = [name, ...kittens]
  return array
};
function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
};
function removeFirstKitten() {
  return kittens.slice(1)
};
