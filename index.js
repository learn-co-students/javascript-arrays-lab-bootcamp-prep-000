const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var destructivelyAppendKitten = kittens
  destructivelyAppendKitten.push(name)
  return  destructivelyAppendKitten
}

function destructivelyPrependKitten(name) {
  var destructivelyPrependKitten = kittens
  destructivelyPrependKitten.unshift(name)
  return destructivelyPrependKitten
}

function destructivelyRemoveLastKitten(name) {
  var destructivelyRemoveLastKitten = kittens
  destructivelyRemoveLastKitten.pop(name)
  return destructivelyRemoveLastKitten
}

function destructivelyRemoveFirstKitten(name) {
  var destructivelyRemoveFirstKitten = kittens
  destructivelyRemoveFirstKitten.shift(name)
  return destructivelyRemoveFirstKitten
}

function appendKitten(name) {
  var appendKitten = kittens
  appendKitten = [...appendKitten,"Broom"]
  return appendKitten
}

function prependKitten(name){
  var prependKitten = kittens
  prependKitten = ["Arnold",...prependKitten]
  return prependKitten
}

function removeLastKitten() {
  var removeLastKitten = kittens
  removeLastKitten = removeLastKitten.slice(0, removeLastKitten.length - 1)
  return removeLastKitten
}

function removeFirstKitten() {
  var removeFirstKitten = kittens
  removeFirstKitten = removeFirstKitten.slice(1)
  return removeFirstKitten
}
