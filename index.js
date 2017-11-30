const app = "I don't do much."
function destructivelyAppendKitten(name) {
    kittens.push(name);
  return name
}
function destructivelyPrependKitten(name) {
    kittens.unshift(name);
  return name
}
function destructivelyRemoveLastKitten(name) {
    kittens.pop(name);
    return name
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return name
}
function appendKitten(name) {
  var newArray = [...kittens, name]
  return newArray
}
function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray
}
function removeLastKitten(name) {
 var newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}
function removeFirstKitten(name) {
  var newArray = kittens.slice(1);
  return newArray
}
