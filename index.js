const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfied"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
}

function appendKitten(name) {
  var kittensOne = [...kittens]
  kittensOne.push(name)
  return kittenOne
}

function prependKitten(name){
  var newkitten = [...kittens]
  newkitten.unshift(name)
  return newkitten
}

function removeLastKitten() {
  var aKitten = [...kittens]
  aKitten.pop()
  return aKitten
}

function removeFirstKitten() {
  var bKitten = [...kittens]
  bKitten.shift()
  return bKitten
}

function appendKitten(name) {
  var cKitten = [...kittens]
  cKitten.push(name)
  return cKitten
}
