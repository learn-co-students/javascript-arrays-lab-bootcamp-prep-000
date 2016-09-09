const app = "I don't do much."

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
  //return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  //return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  //return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  //return kittens
}

function appendKitten(name) {
  var myKittens = kittens
  myKittens = [... kittens, name]
  return myKittens
}

function prependKitten(name) {
  var myKittens = kittens
  myKittens = [name, ... kittens]
  return myKittens
}

function removeLastKitten() {
  //var myKittens = kittens
  var myKittens = kittens.slice(0, kittens.length-1)
  return myKittens
}

function removeFirstKitten() {
  var myKittens = kittens.slice(1, kittens.length )
  return myKittens
}
