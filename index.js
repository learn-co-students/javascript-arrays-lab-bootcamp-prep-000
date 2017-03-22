// const app = "I don't do much."
const kittens = ["Milo", "Otis", "Garfield"]


var destructivelyAppendKitten = function (name) {
    // var kittensCpy = kittens.slice(0)
    kittens.push(name)
    // return kittens
}

function destructivelyPrependKitten(name) {
    kittens.unshift(name)
    // kittens.pop()
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var kittensCpy = kittens.slice(0)
  kittensCpy.push(name)
  return kittensCpy
}

function prependKitten(name) {
  var kittensCpy = kittens.slice(0)
  kittensCpy.unshift(name)
  return kittensCpy
}

function removeLastKitten() {
  var kittensCpy = kittens.slice(0)
  kittensCpy.pop()
  return kittensCpy
}

function removeFirstKitten() {
  var kittensCpy = kittens.slice(0)
  kittensCpy.shift()
  return kittensCpy
}
