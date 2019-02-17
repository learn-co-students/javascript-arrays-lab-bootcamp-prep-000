var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var new_kittens = []
  new_kittens.push(name)
  return (kittens.concat(new_kittens));
}

function prependKitten(name) {
  var new_kittens = []
  new_kittens.unshift(name)
  return (new_kittens.concat(kittens));
}

function removeLastKitten() {
  return kittens.slice(0, 2)
}

function removeFirstKitten() {
  return kittens.slice(1)
}