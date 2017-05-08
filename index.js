const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function kittens() {
  return kittens
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var appndArray = kittens.slice()
  appndArray.push(name)
  return appndArray
}

function prependKitten(name) {
  var appndArray = kittens.slice()
  appndArray.unshift(name)
  return appndArray
}

function removeLastKitten() {
  var appndArray = kittens.slice()
  appndArray.pop()
  return appndArray
}

function removeFirstKitten() {
  var appndArray = kittens.slice()
  appndArray.shift()
  return appndArray
}
