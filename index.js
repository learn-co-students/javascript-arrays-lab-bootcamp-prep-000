const app = "I don't do much."

var kittens = ["Milo" , "Otis" , "Garfield"]

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
  var morekittens = [...kittens , name]
  return morekittens
}

function prependKitten(name) {
  var morekittens = [name, ...kittens]
  return morekittens
}

function removeLastKitten() {
  var lesskittens = kittens.slice(0, kittens.length -1)
  return lesskittens
}

function removeFirstKitten() {
  var lesskittens = kittens.slice(1)
  return lesskittens
}
