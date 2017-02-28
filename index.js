const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}

function appendKitten(name) {
  var newarr = [...kittens, name]
  return newarr
}

function prependKitten(name) {
  var newarr = [name,...kittens]
  return newarr
}

function removeLastKitten(name) {
  var newarr = kittens.slice(0, kittens.length-1)
  return newarr
}

function removeFirstKitten(name) {
  var newarr = kittens.slice(1)
  return newarr
}
