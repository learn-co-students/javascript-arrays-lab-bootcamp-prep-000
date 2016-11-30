const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
    return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens
}

function appendKitten(name) {
  var newKittens = kittens.concat(name);
  return newKittens
}

function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}
