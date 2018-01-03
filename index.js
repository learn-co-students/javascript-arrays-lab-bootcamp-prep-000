const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function kittens () {
  return kittens
}

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
  var newArr = kittens.slice()
  newArr.push(name)
  return newArr
}


function prependKitten(name){
  var newArr = kittens.slice()
  newArr.unshift(name)
  return newArr
}

function removeLastKitten() {
  var newArr = kittens.slice()
  newArr.pop(name)
  return newArr
}

function removeFirstKitten() {
  var newArr = kittens.slice()
  newArr.shift(name)
  return newArr
}
