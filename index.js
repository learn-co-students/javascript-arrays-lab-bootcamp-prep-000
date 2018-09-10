function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}


function appendKitten(name) {
  var appendedKittensArray = [...kittens, name]
  return appendedKittensArray
}

function prependKitten(name) {
  var prependedKittensArray = [name, ...kittens]
  return prependedKittensArray
}

function removeLastKitten() {
  var poppedKittensArray = kittens.slice(0,-1)
  return poppedKittensArray
}

function removeFirstKitten() {
  var shiftedKittensArray = kittens.slice(1)
  return shiftedKittensArray
}