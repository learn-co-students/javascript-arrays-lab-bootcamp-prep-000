const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten() {
  var x1=kittens.push('Ralph')
  return x1
}

function destructivelyPrependKitten() {
  var x2=kittens.unshift('Bob')
  return x2
}

function destructivelyRemoveLastKitten() {
  var x3=kittens.pop()
  return x3
}

function destructivelyRemoveFirstKitten() {
  var x4=kittens.shift()
  return x4
}

function appendKitten(x5) {
  return [...kittens,x5]
}

function prependKitten(x6) {
  return[x6,...kittens]
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
