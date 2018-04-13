const app = "I don't do much."

function destructivelyAppendKitten(element) {
  kittens.push(element)
  return kittens
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element)
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
  var moar_kittens = [...kittens,name]
  return moar_kittens
}

function prependKitten(name) {
  var moar_kittens = [name,...kittens]
  return moar_kittens
}

function removeLastKitten() {
  var less_kittens = kittens.slice(0,kittens.length - 1)
  return less_kittens
}

function removeFirstKitten() {
  var less_kittens = kittens.slice(1)
  return less_kittens
}