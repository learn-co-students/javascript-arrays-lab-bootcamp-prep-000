function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
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
  var array = [name]
  return kittens.concat(array)
}

function prependKitten(name) {
  var array = [name]
  return array.concat(kittens)
}

function removeLastKitten() {
  var array = kittens.slice(0, kittens.length - 1)
  return array
}

function removeFirstKitten() {
  var array = kittens.slice(1, kittens.length)
  return array
}